//import {stringify as YAMLStringify} from 'yaml'
import * as YAML from 'yaml'
import { TagStack } from './tagStack'
const {stringify:YAMLStringify} = YAML

export type FrontmatterParserOptionsType = {
    defaults?: object
    props?: string[]
}
// type TagParserType = {
//     tagName: string
//     open?: (propName:string)
// }

type TagList = {
    open?: object
    text?: object
    close?: object
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const defaultParser = (prop) => ({
    default: '',
    tags: [
        {
            tagName: 'meta',
            open: (changeProp) => (attributes) => {
                if (attributes?.name === prop || attributes?.property === prop) {
                    changeProp.change(attributes.content)
                }
            },
        }
    ]

})



export class FrontmatterParser {
    private frontmatterObject = {}
    private frontmatterObjectTemp = {}
    private tagList: TagList
    private tagStack

    constructor(options: FrontmatterParserOptionsType = {}) {
        this.frontmatterObject = options?.defaults ?? {};
        this.tagStack = new TagStack();

        const frontmatterParseOptionsDefault = {
            lang: {
                default: '',
                tags: [
                    {
                        tagName: 'html',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.lang) {
                                changeProp.change(attributes.lang)
                            }
                        },
                    },
                ]
            },
            source: {
                default: this.frontmatterObject?.['source'] ?? '',
                tags: [
                    {
                        tagName: 'link',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.rel === 'canonical' && attributes?.href !== '') {
                                changeProp.change(attributes.href)
                            }
                        },
                    },
                ]
            },
            title: {
                default: '',
                tags: [
                    {
                        tagName: 'meta',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.property === "og:title") {
                                changeProp.change(attributes.content)
                            }
                        },
                    },
                    {
                        tagName: 'meta',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.name === "twitter:title") {
                                changeProp.change(attributes.content)
                            }
                        },
                    },
                    {
                        tagName: 'title',
                        text: (changeProp) => (text, context) => {
                            changeProp.add(text)
                        },
                    }
                ]
            },
            description: {
                default: '',
                tags: [
                    {
                        tagName: 'meta',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.property === "og:description") {
                                changeProp.change(attributes.content)
                            }
                        },
                    },
                    {
                        tagName: 'meta',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.name === "twitter:description") {
                                changeProp.change(attributes.content)
                            }
                        },
                    },
                    {
                        tagName: 'meta',
                        open: (changeProp) => (attributes) => {
                            if (attributes?.name === "description") {
                                changeProp.change(attributes.name)
                            }
                        },
                    }
                ]
            }
        }

        const self = this;
        this.tagList = (options?.props ?? []).map(p => ([p, frontmatterParseOptionsDefault?.[p] ?? defaultParser(p)])).reduce((pv, [prop, renderer]) => {
            if (!self.frontmatterObject.hasOwnProperty(prop)) {
                self.frontmatterObject[prop] = renderer?.default ?? ''
            }
            renderer.tags.reduce((allTags, tag, priority) => {
                ['open', 'text', 'close'].forEach(phase => {
                    if (tag.hasOwnProperty(phase)) {
                        if (!allTags[phase].hasOwnProperty(tag.tagName)) allTags[phase][tag.tagName] = [];
                        allTags[phase][tag.tagName].push(tag[phase](self.changeProp(prop, priority)));
                    }
                })
                return allTags
            }, pv)
            return pv
        }, { open: [], text: [], close: [] })

    }

    open(tagname, attributes) {
        if (this.tagList.open?.[tagname]) {
            this.tagList.open?.[tagname].forEach(parse => {
                parse(attributes)
            });
        }
        this.tagStack.push(tagname, attributes);
    }
    text(text) {
        const lastTagname = this.tagStack.lastTagname()
        if (this.tagList.text?.[lastTagname]) {
            this.tagList.text?.[lastTagname].forEach(parse => {
                parse(text)
            });
        }
    }
    close() {
        const lastTagname = this.tagStack.lastTagname()
        if (this.tagList.close?.[lastTagname]) {
            this.tagList.close?.[lastTagname].forEach(parse => {
                parse()
            });
        }
        this.tagStack.pop()
    }

    changeProp(propName, priority) {
        const self = this;
        self.frontmatterObjectTemp[propName] = [];
        return {
            add(value) {
                if (self.frontmatterObjectTemp[propName][priority] === undefined) self.frontmatterObjectTemp[propName][priority] = ''
                self.frontmatterObjectTemp[propName][priority] += value
            },
            change(value) {
                self.frontmatterObjectTemp[propName][priority] = value
            }
        }
    }
    private mergeFrontmatterObject() {
        const reduced = Object.entries(this.frontmatterObjectTemp).reduce((prev, [key, values]) => {

            const v = Object.entries(values).reduce((p, [prio, value]) => {
                const prioNum = parseInt(prio)
                if (prioNum < p.prio) {
                    p.prio = prioNum
                    p.value = value
                }
                return p
            }, { prio: Number.MAX_SAFE_INTEGER, value: undefined }).value
            if (v) prev[key] = v;
            return prev
        }, {});
        return {
            ...this.frontmatterObject,
            ...reduced
        }
    }

    getYaml() {
        const result = this.mergeFrontmatterObject()
        return isEmpty(result) ? '' : "---\n" + YAMLStringify(result) + "---\n"
    }
    getObject() {
        return this.mergeFrontmatterObject()
    }
}