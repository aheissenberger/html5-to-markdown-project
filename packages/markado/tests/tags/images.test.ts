import { html2markdown } from '../../src'

describe('images', () => {
    it('simple img', () => {
        const html = '<img src="https://www.website.test/image.jpg" />'
        const expected = "![](https://www.website.test/image.jpg)"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('alt and title', () => {
        const html = '<img alt="alt text" title="title text" src="https://www.website.test/image.jpg" />'
        const expected = '![alt text](https://www.website.test/image.jpg "title text")'
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})
