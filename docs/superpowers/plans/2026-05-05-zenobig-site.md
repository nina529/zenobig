# Zenobig Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new multi-page Zenobig studio website with a distinct archive-style visual language and publish-ready static pages.

**Architecture:** Use a plain static HTML, CSS, and light JavaScript setup. Keep the site multi-page, but redesign both layout structure and page naming so it no longer reads like the earlier studio templates.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node test runner

---

### Task 1: Bootstrap the static site structure

**Files:**
- Create: `C:\Users\64998\Pictures\zenobig\package.json`
- Create: `C:\Users\64998\Pictures\zenobig\.gitignore`
- Create: `C:\Users\64998\Pictures\zenobig\assets\js\site.js`

- [ ] Step 1: Add package metadata and a test script
- [ ] Step 2: Add a minimal ignore file for local noise
- [ ] Step 3: Add lightweight JavaScript for active navigation state and reveal behavior

### Task 2: Define tests before implementation

**Files:**
- Create: `C:\Users\64998\Pictures\zenobig\tests\site.test.mjs`

- [ ] Step 1: Write tests for page existence, navigation coverage, shared assets, and Zenobig-specific copy
- [ ] Step 2: Run the tests and confirm they fail because the pages do not exist yet

### Task 3: Build the new page set

**Files:**
- Create: `C:\Users\64998\Pictures\zenobig\index.html`
- Create: `C:\Users\64998\Pictures\zenobig\practice.html`
- Create: `C:\Users\64998\Pictures\zenobig\systems.html`
- Create: `C:\Users\64998\Pictures\zenobig\revenue.html`
- Create: `C:\Users\64998\Pictures\zenobig\contact.html`
- Create: `C:\Users\64998\Pictures\zenobig\privacy.html`
- Create: `C:\Users\64998\Pictures\zenobig\support.html`

- [ ] Step 1: Create the homepage with a chapter-based, editorial structure
- [ ] Step 2: Create the internal pages with consistent but varied layouts
- [ ] Step 3: Place the provided Zenobig email addresses in contact-facing pages

### Task 4: Implement the new visual system

**Files:**
- Create: `C:\Users\64998\Pictures\zenobig\assets\css\styles.css`

- [ ] Step 1: Build a new poster-like layout system with rails, labels, and asymmetrical sections
- [ ] Step 2: Add responsive behavior so the structure still works on mobile
- [ ] Step 3: Keep the style clearly separated from prior studio sites

### Task 5: Verify and prepare for publish

**Files:**
- Verify: `C:\Users\64998\Pictures\zenobig\tests\site.test.mjs`
- Verify: all site pages and shared assets

- [ ] Step 1: Run `cmd /c npm test` and confirm all checks pass
- [ ] Step 2: Initialize Git and attach the `https://github.com/nina529/zenobig.git` remote
- [ ] Step 3: Commit the complete Zenobig site for push and deployment
