import {html2markdown} from '../../src'

describe('blockquotes',()=>{
    it('simple',()=>{
        const html="<blockquote>Text Text Text </blockquote>"
        const expected = "> Text Text Text\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('nested',()=>{
        const html="<blockquote>Text Text Text <blockquote>Text Text Text </blockquote></blockquote>"
        const expected = "> Text Text Text\n>> Text Text Text\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })

    xit('embed other elements',()=>{
        const html="<blockquote><h2>Headline</h2><ul><li>Item 1</li><li>Item 2</li></ul><p><em>italic</em> to <b>bold</b></p></blockquote>"
        const expected = "> ## Headline\n* Item 1\n*Item 2\n\n__italic__ to **bold**\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})