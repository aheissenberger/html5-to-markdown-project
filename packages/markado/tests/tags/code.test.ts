import { html2markdown } from '../../src'

describe('code', () => {
    it('simple code', () => {
        const html = '<code> var a=1; </code>'
        const expected = '` var a=1; `' 
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('code with html', () => {
        const html = '<code>&lt;a href=&quot;https://www.website.test&quot;&gt;Linktext &lt;/a&gt;</code>'
        const expected = '`<a href="https://www.website.test">Linktext </a>`'
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('Block code "fences"', () => {
        const html = '<pre><code> var a=1; </code></pre>'
        const expected = "\n```\n var a=1; \n```\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('Block code "fences" with language', () => {
        const html = '<pre class="hljs language-javascript"><code> var a=1; </code></pre>'
        const expected = "\n``` javascript\n var a=1; \n```\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})

xdescribe('pre', () => {
    it('simple code', () => {
        const html = '<pre> var a=1; </pre>'
        const expected = "\n```\n var a=1; \n```\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})
