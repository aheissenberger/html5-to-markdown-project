import { html2markdown } from '../../src'

describe('source', () => {
    it('canonical', () => {
        const html = `<html>
        <head>
          <link rel="canonical" href="https://www.canonical.test/" />
        </head>
      </html>`
      
        const expected = "---\nsource: https://www.canonical.test/\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['source'],
               defaults: {
                   source: "https://www.website.test"
               }
           }
        })
        expect(md).toBe(expected)
    })

    it('no canonical', () => {
        const html = `<html>
        <head>
          
        </head>
      </html>`
      
        const expected = "---\nsource: https://www.website.test/\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['source'],
               defaults: {
                   source: "https://www.website.test/"
               }
           }
        })
        expect(md).toBe(expected)
    })
    it('no default', () => {
        const html = `<html>
        <head>
          
        </head>
      </html>`
      
      const expected = '---\nsource: ""\n---\n'
        const md = html2markdown(html,{
           frontmatter: {
               props: ['source'],
           }
        })
        expect(md).toBe(expected)
    })

})