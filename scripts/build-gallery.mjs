/**
 * build-gallery.mjs
 *
 * Reads comments from GitHub Discussions #3, extracts portfolio URLs,
 * and regenerates the card section in public/gallery.html.
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_... node scripts/build-gallery.mjs
 *
 * Comment format attendees can use (all fields optional except a URL):
 *   Name: Firstname Lastname
 *   Note: Short description (role, company, etc.)
 *   https://my-portfolio-site.com
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const OWNER             = 'BrettReifs';
const REPO              = 'ai-portfolio-workshop';
const DISCUSSION_NUMBER = 3;

// ── GraphQL ────────────────────────────────────────────────────────────────

const QUERY = `
  query($owner: String!, $repo: String!, $number: Int!) {
    repository(owner: $owner, name: $repo) {
      discussion(number: $number) {
        comments(first: 100) {
          nodes {
            body
            author {
              login
              ... on User { name }
            }
          }
        }
      }
    }
  }
`;

async function graphql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const { data, errors } = await res.json();
  if (errors?.length) throw new Error(JSON.stringify(errors));
  return data;
}

// ── Parsing ────────────────────────────────────────────────────────────────

function parseComment(body, author) {
  // Extract first https URL, ignoring github.com links
  const urlMatch = body.match(/https?:\/\/[^\s)>"'\]]+/g);
  const url = urlMatch
    ?.map(u => u.replace(/[.,;:)>\]]+$/, ''))
    .find(u => !u.includes('github.com'));
  if (!url) return null;

  // Name: explicit label, fallback to GitHub display name, fallback to login
  const nameMatch = body.match(/^Name:\s*(.+)$/im);
  const name = nameMatch
    ? nameMatch[1].trim()
    : (author?.name?.trim() || author?.login || 'Anonymous');

  // Note: explicit label, fallback to first plain-text line
  const noteMatch = body.match(/^Note:\s*(.+)$/im);
  let note = '';
  if (noteMatch) {
    note = noteMatch[1].trim().slice(0, 120);
  } else {
    const textLine = body
      .split('\n')
      .map(l => l.trim())
      .find(l =>
        l.length > 0 &&
        !l.startsWith('http') &&
        !l.toLowerCase().startsWith('name:') &&
        !l.toLowerCase().startsWith('note:')
      );
    if (textLine) note = textLine.slice(0, 120);
  }

  const displayUrl = url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');

  return { url, name, note, displayUrl };
}

// ── HTML generation ────────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const EXT_ICON = `<svg class="icon-ext" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

function cardHtml({ url, name, note, displayUrl }) {
  const noteHtml = note ? `\n          <div class="card-note">${esc(note)}</div>` : '';
  return `      <a class="card"
         href="${esc(url)}"
         target="_blank" rel="noopener"
         aria-label="${esc(name)} — open portfolio in new tab">
        <div class="card-preview">
          <iframe src="${esc(url)}"
                  title="${esc(name)} portfolio preview"
                  loading="lazy" tabindex="-1" aria-hidden="true"></iframe>
          <div class="overlay"></div>
        </div>
        <div class="card-body">
          <div class="card-name">${esc(name)}</div>${noteHtml}
          <span class="card-url">
            ${EXT_ICON}
            ${esc(displayUrl)}
          </span>
        </div>
      </a>`;
}

// ── Main ───────────────────────────────────────────────────────────────────

const data = await graphql(QUERY, {
  owner: OWNER,
  repo:  REPO,
  number: DISCUSSION_NUMBER,
});

const comments = data.repository.discussion.comments.nodes;

const seen = new Set();
const cards = comments
  .map(c => parseComment(c.body, c.author))
  .filter(Boolean)
  .filter(card => {
    if (seen.has(card.url)) return false;
    seen.add(card.url);
    return true;
  })
  .map(cardHtml)
  .join('\n\n');

const galleryPath = join(__dirname, '..', 'public', 'gallery.html');
const html = readFileSync(galleryPath, 'utf8');

const START = '<!-- GALLERY_START -->';
const END   = '<!-- GALLERY_END -->';

const startIdx = html.indexOf(START);
const endIdx   = html.indexOf(END);
if (startIdx === -1 || endIdx === -1) {
  throw new Error('GALLERY_START / GALLERY_END markers not found in gallery.html');
}

const before  = html.slice(0, startIdx + START.length);
const after   = html.slice(endIdx);
const updated = before + (cards ? '\n' + cards + '\n      ' : '') + after;

writeFileSync(galleryPath, updated, 'utf8');

const count = seen.size;
console.log(`gallery.html updated — ${count} community card${count !== 1 ? 's' : ''}.`);
