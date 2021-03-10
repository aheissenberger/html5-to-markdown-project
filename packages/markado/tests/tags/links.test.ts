import { html2markdown } from '../../src'

describe('a', () => {
    it('simple', () => {
        const html = '<a href="https://www.website.test">Linktext</a>'
        const expected = "[Linktext](https://www.website.test)"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('with title', () => {
        const html = '<a href="https://www.website.test" title="title text">Linktext</a>'
        const expected = '[Linktext](https://www.website.test "title text")'
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('multiple', () => {
        const html = '<div><a href="https://www.website.test">Linktext </a><a href="https://www.website.test">Linktext </a></div>'
        const expected = "[Linktext](https://www.website.test)[Linktext ](https://www.website.test)\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})
