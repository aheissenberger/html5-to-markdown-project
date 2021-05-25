import { html2markdown } from '../../src'

describe('bookmarks', () => {
    it('description', () => {

        const html = `<html>
        <head>
            <title>Title</title>
          <meta name="description" content="Description 1" />
          <meta name="twitter:description" content="Description 2" />
          <meta property="og:description" content="Description 3" />
        </head>
      </html>`

        const sourceURL = 'https://www.example.com/'

        const tags = ['aa', 'bb', 'cc']

        const expected = "---\nsource: https://www.example.com/\ntags:\n  - aa\n  - bb\n  - cc\ndescription: Description 3\ntitle: Title\n---\n# Title\n\n#aa #bb #cc\n\nDescription 3\n\n"
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