import {html2markdown} from '../../src'

describe('Horizontal Rules',()=>{
    it('hr',()=>{
        const html="<hr/>"
        const expected = "\n----\n\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})