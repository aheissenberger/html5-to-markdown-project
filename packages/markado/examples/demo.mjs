import {html2markdown} from '../dist/html2markdown.js'
import {readFileSync} from 'fs'

const html = readFileSync('test/demo.html','utf8')

const md = html2markdown(html)

process.stdout.write(md)