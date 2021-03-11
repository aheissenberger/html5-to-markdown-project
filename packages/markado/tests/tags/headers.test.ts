import {html2markdown} from '../../src'

describe('h1',()=>{
    it('simple',()=>{
        const html="<H1>Headline</H1>"
        const expected = "\n# Headline\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('with new lines',()=>{
        const html="<H1>\nHeadline\n</H1>"
        const expected = "\n# Headline\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('with bold inline',()=>{
        const html="<H1> <strong>*</strong> Headline<strong>1</strong> <strong>2</strong> </H1>"
        const expected = "\n# ***** Headline**1** **2**\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('with span inline',()=>{
        const html="<H1> <span>*</span> Headline<span>1</span> <span>2</span> </H1>"
        const expected = "\n# * Headline1 2\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('with links',()=>{
        const html='<H1> <span>*</span> Headline<span>1</span> <a href="https://www.website.test">Linktext</a> </H1>'
        const expected = "\n# * Headline1 [Linktext](https://www.website.test)\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})