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
- [ ] Resize images
- [ ] Fix disappearing taglines on small site
- [x] Make blog
    - *[Made blog](https://github.com/justusthane/grav-justus.ws/commit/e3a307f5c5976b22ed4dd1e2932df896f8dbdaf6)!*
    - [ ] Different content types (long post, blurb, photo, link)
    - [ ] Tags
- [ ] Automatic ToC for long pages?
   - How to parse Markdown and pull headers into Twig template?
- [ ] On listing pages show date published/date updated
- [x] Figure out how to unobstrusively integrate an [h-Card](http://microformats.org/wiki/h-card) into the homepage?
   - Maybe integrate with the Elsewhere section, since that's mostly links to me at other places?
   - Or "Me" section?
   - [ ] Eventually move the h-card to a footer below an hr
- [ ] [Semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [x] Favicon
- [ ] Define the site tagline in YAML
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


## Content
- [ ] Worm composting article?
- [x] [Cast iron pan care](https://justus.ws/food/care-of-cast-iron-pans)
- [ ] In appreciation of the bamboo spatula
- [ ] Glove darning blog post
- [ ] FZF article
- [ ] Add /now page
- [ ] Add "How does this site work?" page
- [ ] Self-composting page?
- [ ] "Slow Story": use a neural network or something to generate a story at a speed of one word per day
    - I definitely don't know how to do this, but I like the idea and it might be fun to figure out?
