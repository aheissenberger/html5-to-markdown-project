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
})