import { html2markdown } from '../../src'

describe('tags', () => {
    it('ok', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ['aa', 'bb', 'cc']

        const expected = `---
source: https://www.example.com/
tags:
  - aa
  - bb
  - cc
description: ""
title: Title
---
# Title

#aa #bb #cc



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })

    it('space character', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ['aa bb cc']

        const expected = `---
source: https://www.example.com/
tags:
  - aa-bb-cc
description: ""
title: Title
---
# Title

#aa-bb-cc



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })

    it('not allowed character, umlaut transformation', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ["Das ist #alles88 X-_-X \nÜberhaupt!"]

        const expected = `---
source: https://www.example.com/
tags:
  - das-ist-alles88-x-_-x-ueberhaupt
description: ""
title: Title
---
# Title

#das-ist-alles88-x-_-x-ueberhaupt



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })

    it('umlaut transformation', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ["ÄÖÜäöüß"]

        const expected = `---
source: https://www.example.com/
tags:
  - aeoeueaeoeuess
description: ""
title: Title
---
# Title

#aeoeueaeoeuess



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })

    it('not allowed characters to dash', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ["Das ist#alles88 X-_-X \nUberhaupt!"]

        const expected = `---
source: https://www.example.com/
tags:
  - das-ist-alles88-x-_-x-uberhaupt
description: ""
title: Title
---
# Title

#das-ist-alles88-x-_-x-uberhaupt



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })

    it('remove multiple dashes', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ["hallo-wien--graz---insbruck--"]

        const expected = `---
source: https://www.example.com/
tags:
  - hallo-wien-graz-insbruck
description: ""
title: Title
---
# Title

#hallo-wien-graz-insbruck



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })

    it('remove empty tags', () => {

        const html = `<html>
        <head>
            <title>Title</title>
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ["a","","","b"]

        const expected = `---
source: https://www.example.com/
tags:
  - a
  - b
description: ""
title: Title
---
# Title

#a #b



`
        const md = html2markdown(html, {
            frontmatter: {
                props: ['description', 'title'],
                defaults: {
                    source: sourceURL,
                    tags: tags
                },
                bookmarks: true
            }
        })
        expect(md).toBe(expected)
    })
})