---
title: Jubilee Austen
type: tech-project
content_order: 4
image: "./image.png"
image_description: "Screenshot of the Jubilee Austen website"
main_skills: |
    Adobe Photoshop, HTML5, CSS3 (Responsive Web Design, Media Queries, Flexbox)
other_skills: |
    Visual Studio Code, Google Fonts, Font Awesome, normalize.css, Chrome DevTools, Git, GitHub, W3C HTML & CSS Validation, ChromeVox, VoiceOver, WAVE Accessibility Checker, AChecker, Lighthouse
description: |
    Developed a website for budding developer Jubilee Austen based on a Photoshop design comp (a Skillcrush project).
website: https://jessabejar.github.io/jubilee-austen/
source: https://github.com/JessAbejar/jubilee-austen/
---
## Revamping My First Project
The Jubilee Austen website is probably one of the first projects I had ever completed as part of the Skillcrush Break Into Tech Blueprint. Nearly a year after taking the course and having learned more about front-end web development, I decided to revisit and refactor the Jubilee Austen project.

## Quick Fixes
I began with some quick fixes including:
- removing images that were once used for icons since Font Awesome is now used
- updating normalize.css
- adding a meta description
- removing vendor prefixes for flexbox
- adding comments in HTML to divide content

## Coding the CSS

Since the content remained the same, I largely focused on fixing CSS, specifically its layout. I still wanted to use flexbox, but I especially wanted to remove extraneous `<div>s` and styling in heading text.

### Layouts & Removing Divs

I went section by section to remove extra divs and to work with different flexbox properties. One of my original classes, `.flex-container` was applied in each section with a few overrides. I first followed that convention but then decided to instead assign an ID to each `<section>` and style them accordingly. While some sections shared similar properties, I eventually saw that each section had different behavior when moving through browser sizes. So I decided it was easier to assign properties and values directly to each of the three sections.

### Styling Across Browsers & Breakpoints

Another challenge that I faced was styling across browsers. The original project design was desktop-only so making it responsive was a challenge. While I already had a responsive design in place, I wanted to refine it. I had one issue with styling for tablets so one solution I had was to create a third breakpoint. I originally had a breakpoint at `940px`, switched to `1200px` and then later added `940px` back in. The added breakpoint was much better for the design, especially for the section with three columns.

## QA

While redoing this site was a short project, I made sure to look for any accessibility or performance issues. A few issues included low color contrast and an issue with the old Font Awesome CDN (I later made a quick fix). The markup of the social links can be better as well. But overall, I had a better understanding of semantic HTML this time around and was able to implement them in this update.

## In Summary

Refactoring took longer than expected but was a great practice in reviewing code, revisiting legacy code, and working on an existing codebase. I imagine the process of working on a team or contributing to open source would be somewhat similar, and while I still have a lot to work out in regards to my own process of reviewing existing code, I am happy with the result of this first project.