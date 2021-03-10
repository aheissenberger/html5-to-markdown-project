import {html2markdown} from '../../src/html2markdown'

describe('script',()=>{
    it('simple',()=>{
        const html="<script>var a=1;</script>"
        const expected = ""
        const md = html2markdown(html,{removeElements:['script']})
        expect(md).toBe(expected)
    })
    it('sub element',()=>{
        const html="<script><H1>\nHeadline\n</H1></script>"
        const expected = ""
        const md = html2markdown(html,{removeElements:['script']})
        expect(md).toBe(expected)
    })
})

describe('style',()=>{
    it('simple',()=>{
        const html="<style>var a=1;</style>"
        const expected = ""
        const md = html2markdown(html,{removeElements:['style']})
        expect(md).toBe(expected)
    })
    it('sub element',()=>{
        const html="<style><H1>\nHeadline\n</H1></style>"
        const expected = ""
        const md = html2markdown(html,{removeElements:['style']})
        expect(md).toBe(expected)
    })
})