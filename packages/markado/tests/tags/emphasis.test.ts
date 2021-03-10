import { html2markdown } from '../../src'

describe('Emphasis', () => {
    it('bold / strong', () => {
        const html = '<b>bold</b> <strong>strong</strong>'
        const expected = "**bold** **strong**"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('italic "em"', () => {
        const html = '<em>Italic</em>'
        const expected = "_Italic_"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('strikethrough "s"', () => {
        const html = '<s>Strikethrough</s>'
        const expected = "~~Strikethrough~~"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('Inserted Text "ins"', () => {
        const html = '<ins>Inserted Text</ins>'
        const expected = "++Inserted Text++"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('Marked Text "mark"', () => {
        const html = '<mark>Marked Text</mark>'
        const expected = "==Marked Text=="
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('Subscript "sub"', () => {
        const html = '<sub>Subscript</sub>'
        const expected = "~Subscript~"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('Superscript "sup"', () => {
        const html = '<sup>Superscript</sup>'
        const expected = "^Superscript^"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})