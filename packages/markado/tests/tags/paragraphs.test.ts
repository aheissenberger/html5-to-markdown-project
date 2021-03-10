import {html2markdown} from '../../src/html2markdown'

describe('paragraphs',()=>{
    it('p',()=>{
        const html="<p>Text Text Text </p>"
        const expected = "Text Text Text\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('br',()=>{
        const html="<p>Text Text<br/> Text </p>"
        const expected = "Text Text\n Text\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})