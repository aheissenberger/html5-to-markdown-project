import { html2markdown } from '../../src'

describe('source', () => {
    it('canonical', () => {
        const html = `<html>
        <head>
          <link rel="canonical" href="https://www.canonical.test/" />
        </head>
      </html>`
      
        const expected = "---\nsource: https://www.canonical.test/\n---\n\n" 
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
      
        const expected = "---\nsource: https://www.website.test/\n---\n\n" 
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
      
      const expected = '---\nsource: ""\n---\n\n'
        const md = html2markdown(html,{
           frontmatter: {
               props: ['source'],
           }
        })
        expect(md).toBe(expected)
    })

    it('tagname is internal javascript function "filter"', () => {
        const html = `<html>
        <svg><filter id="duotone_orange_pink"></filter></svg>
      </html>`
      
      const expected = '---\nsource: ""\n---\n\n'
        const md = html2markdown(html,{
           frontmatter: {
               props: ['source'],
           }
        })
        expect(md).toBe(expected)
    })

})