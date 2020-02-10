---
title: 'Things I want to do on this site'
menu: 'todo'
tagline: '&nbsp;for this site'
---

## Site
- [x] Stop images from being sideways :\ 
   - *[This was apparently just an issue with the exif data from iPhone photos](https://stackoverflow.com/questions/20290419/why-do-my-webpage-images-appear-sideways-in-my-html-but-correct-when-in-full-scr). Opening the images in Preview and saving them fixed it.*
- [x] Fix site tagline on mobile
- [x] Manual ordering for home page links
- [x] Split homepage into "Here" and "Elsewhere" sections
    - [x] Figure out better way to manage homepage *elsewhere* links other than hardcoded in the template
        - *[Links now defined in home page frontmatter YAML](https://github.com/justusthane/grav-justus.ws/commit/294faf768b95e80e0b8ba2b7028cc7ca797f202e) rather than hardcoded into template. Yay!*
- [ ] Add blog
    - [ ] Different content types (long post, blurb, photo, link)
    - [ ] Tags
- [ ] Automatic ToC for long pages?
   - How to parse Markdown and pull out headers from Twig template?
- [ ] Figure out how to unobstrusively integrate an [h-Card](http://microformats.org/wiki/h-card) into the homepage?
- [ ] [Semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [ ] Favicon
- [ ] Define the site tagline in YAML config
- [ ] Add indicator for external links
- [ ] Write Grav plugin to render these markdown checkboxes as HTML checkboxes
   - [ ] Model after Github markdown preview checkboxes
- [x] Add *Links* page
- [ ] Add RSS feeds
- [ ] Add options page
    - [ ] light theme/dark theme
        - [ ] default to device preference
    - [ ] LocalStorage to indicate new items since last visit
- [ ] Publish theme?
- [ ] "Slow Story": use a neural network or something to generate a story at a speed of one word per day
    - I definitely don't know how to do this, but I like the idea and it might be fun to figure out?

## Content
- [ ] Worm composting article?
- [ ] Glove darning blog post
- [ ] FZF article
- [ ] Add /now page
- [ ] Add "How does this site work?" page
