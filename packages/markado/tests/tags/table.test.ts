import { html2markdown } from '../../src'

describe('table', () => {
    it('simple', () => {
        const html = `
<table>
<tr><td>Header</td><td>Title</td></tr>
<tr><td>Paragraph</td><td>Text</td></tr>
</table>
`
        const expected = 
`
| Header | Title |
| Paragraph | Text |

` 
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
    it('header', () => {
        const html = `
<table>
<thead>
<tr><td>Syntax</td><td>Description</td></tr>
</thead>
<tbody>
<tr><td>Header</td><td>Title</td></tr>
<tr><td>Paragraph</td><td>Text</td></tr>
</tbody>
</table>
`
        const expected = 
`
| Syntax | Description |
| --- | --- |
| Header | Title |
| Paragraph | Text |

` 
        const md = html2markdown(html)
        expect(md).toBe(expected)
    })
})