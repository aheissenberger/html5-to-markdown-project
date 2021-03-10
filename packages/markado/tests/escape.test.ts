import {escape} from '../src'

xdescribe('escape',()=>{
    it('simple',()=>{
        const html="**"
        const expected = "\\*\\*"
        const md = escape(html)
        expect(md).toBe(expected)
    })
    it('simple not',()=>{
        const html="*"
        const expected = "*"
        const md = escape(html)
        expect(md).toBe(expected)
    })
})