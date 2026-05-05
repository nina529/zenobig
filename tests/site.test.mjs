import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = [
  "index.html",
  "practice.html",
  "systems.html",
  "revenue.html",
  "contact.html",
  "privacy.html",
  "support.html",
];

function read(page) {
  return fs.readFileSync(path.join(root, page), "utf8");
}

for (const page of pages) {
  test(`${page} exists`, () => {
    assert.equal(fs.existsSync(path.join(root, page)), true);
  });
}

test("all pages include a title tag", () => {
  for (const page of pages) {
    assert.match(read(page), /<title>.+<\/title>/i);
  }
});

test("all pages include shared CSS and JS assets", () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /assets\/css\/styles\.css/i);
    assert.match(html, /assets\/js\/site\.js/i);
  }
});

test("homepage presents the Zenobig archive-style studio framing", () => {
  const html = read("index.html");
  assert.match(html, /Zenobig/i);
  assert.match(html, /mobile software/i);
  assert.match(html, /IAA monetization/i);
  assert.match(html, /field manual|studio brief|operating notes/i);
});

test("navigation links to the full Zenobig page set", () => {
  const html = read("index.html");
  assert.match(html, /href="practice\.html"/i);
  assert.match(html, /href="systems\.html"/i);
  assert.match(html, /href="revenue\.html"/i);
  assert.match(html, /href="contact\.html"/i);
  assert.match(html, /href="privacy\.html"/i);
  assert.match(html, /href="support\.html"/i);
});

test("systems page describes mobile product systems", () => {
  const html = read("systems.html");
  assert.match(html, /mobile product systems/i);
  assert.match(html, /release architecture/i);
  assert.match(html, /software delivery/i);
});

test("revenue page explains IAA monetization practices", () => {
  const html = read("revenue.html");
  assert.match(html, /IAA monetization/i);
  assert.match(html, /placement strategy/i);
  assert.match(html, /retention/i);
  assert.match(html, /mediation/i);
});

test("contact page includes all public inboxes", () => {
  const html = read("contact.html");
  assert.match(html, /support@zenobig\.com/i);
  assert.match(html, /business@zenobig\.com/i);
  assert.match(html, /vip@zenobig\.com/i);
});

test("support page includes support guidance and FAQ language", () => {
  const html = read("support.html");
  assert.match(html, /Support Guidance/i);
  assert.match(html, /Frequently Asked Questions/i);
  assert.match(html, /support@zenobig\.com/i);
});

test("privacy page includes detailed privacy sections", () => {
  const html = read("privacy.html");
  assert.match(html, /Privacy Policy/i);
  assert.match(html, /Information We Collect/i);
  assert.match(html, /Data Retention/i);
  assert.match(html, /International Transfers/i);
  assert.match(html, /Your Rights/i);
  assert.match(html, /IAA Advertising and Analytics/i);
  assert.match(html, /business@zenobig\.com/i);
});
