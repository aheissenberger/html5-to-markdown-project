import { html2markdown } from '../../src'

describe('title', () => {
    it('simple code', () => {
        const html = '<head><title>Title</title></head>'
        const expected = "---\ntitle: Title\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['title']
           }
        })
        expect(md).toBe(expected)
    })

    it('escaped', () => {
        const html = `<head><title>Title's "extra"</title></head>`
        const expected = `---\ntitle: Title's "extra"\n---\n`
        const md = html2markdown(html,{
           frontmatter: {
               props: ['title']
           }
        })
        expect(md).toBe(expected)
    })

    it('with multiple sources', () => {
        const html = '<head><title>Title</title><meta property="og:title" content="og-title"/><meta name="twitter:title" content="twitter-title"/></head>'
        const expected = "---\ntitle: og-title\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
            props: ['title']
        }
        })
        expect(md).toBe(expected)
    })

    it('with default values', () => {
        const html = ''
        const expected = "---\nsource: http://www.website.at/\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
               defaults: {
                   source: 'http://www.website.at/'
               }
           }
        })
        expect(md).toBe(expected)
    })

    it('any meta value', () => {
        const html = '<head><meta name="apple-itunes-app" content="app-id=1477376905"/></head>'
        const expected = "---\napple-itunes-app: app-id=1477376905\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['apple-itunes-app']
           }
        })
        expect(md).toBe(expected)
    })

    it('meta plus body', () => {
        const html = '<html><head><title>Title</title></head><body><h1>Header 1</h1></body></html>'
        const expected = "---\ntitle: Title\n---\n\n# Header 1\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['title']
           }
        })
        expect(md).toBe(expected)
    })
    
    it('lang', () => {
        const html = '<html lang="en" data-color-mode="light" data-light-theme="light" data-dark-theme="dark"></html>'
        const expected = "---\nlang: en\n---\n\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['lang']
           }
        })
        expect(md).toBe(expected)
    })

    it('description', () => {
        const html = `<html>
        <head>
          <meta name="description" content="Description 1" />
          <meta name="twitter:description" content="Description 2" />
          <meta property="og:description" content="Description 3" />
        </head>
      </html>`
      
        const expected = "---\ndescription: Description 3\n---\n\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['description']
           }
        })
        expect(md).toBe(expected)
    })

    
})
