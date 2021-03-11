import {html2markdown} from '../../src'

describe('ul',()=>{
    it('simple',()=>{
        const html='<ul><li>Item 1</li><li>Item 2</li></ul>'
        const expected = "\n- Item 1\n- Item 2\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('hirachical',()=>{
        const html=`
        <ul>
            <li>Item 10</li>
            <li>Item 20<ul>
                <li>Item 11</li>
                <li>Item 21<ul>
                    <li>Item 12</li>
                    <li>Item 22</li>
                    <li>Item 32</li>
                </ul></li>
                <li>Item 31</li>
                </ul>
            </li>
            <li>Item 30</li>
        </ul>`
        const expected = "\n- Item 10\n- Item 20\n  - Item 11\n  - Item 21\n    - Item 12\n    - Item 22\n    - Item 32\n  - Item 31\n- Item 30\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})


describe('ol',()=>{
    it('simple',()=>{
        const html='<ol><li>Item 1</li><li>Item 2</li></ol>'
        const expected = "\n1. Item 1\n1. Item 2\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('hirachical',()=>{
        const html='<ol><li>Item 1</li><li>Item 2<ol><li>Item 1</li><li>Item 2<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></li><li>Item 3</li></ol></li><li>Item 3</li></ol>'
        const expected = "\n1. Item 1\n1. Item 2\n  1. Item 1\n  1. Item 2\n    - Item 1\n    - Item 2\n    - Item 3\n  1. Item 3\n1. Item 3\n"
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})
