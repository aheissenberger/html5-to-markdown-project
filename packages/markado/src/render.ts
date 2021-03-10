const tagHeadline = (level:number)=>({
    open:(attributes:object)=>{
        return "\n"+"#".repeat(level)+" "
    },
    text: defaultText,
    close:()=> {
        return "\n\n"
    }
})

export const defaultText = (text,context) => {
    if (inlineElement.includes(context.lastTag)) { // any inline element
        text = text.replace(/\s/g, ' ')
        if (text.length > 1) {
            text.trimLeft()
        }
    } else {
        text = text.replace(/\s/g, ' ').trim();
    }
    return text;
}

export const render = {
    h1: tagHeadline(1),
    h2: tagHeadline(2),
    h3: tagHeadline(3),
    h4: tagHeadline(4),
    h5: tagHeadline(5),
    h6: tagHeadline(6),
    div: {
        open(attributes) {
            return ""
        },
        text: defaultText,
        close() {
            return "\n"
        }
    },
    p: {
        open(attributes) {
            return ""
        },
        text: defaultText,
        close() {
            return "\n\n"
        }
    },
    br: {
        open(attributes) {
            return ""
        },
        text: defaultText,
        close() {
            return "\n"
        }
    },
    hr: {
        open(attributes) {
            return ""
        },
        text: defaultText,
        close() {
            return "\n----\n\n"
        }
    },
    b: {
        open(attributes) {
            return "**"
        },
        text: defaultText,
        close() {
            return "**"
        }
    },
    strong: {
        open(attributes) {
            return "**"
        },
        text: defaultText,
        close() {
            return "**"
        }
    },
    em: {
        open(attributes) {
            return "_"
        },
        text: defaultText,
        close() {
            return "_"
        }
    },
    s: {
        open(attributes) {
            return "~~"
        },
        text: defaultText,
        close() {
            return "~~"
        }
    },
    ins: {
        open(attributes) {
            return "++"
        },
        text: defaultText,
        close() {
            return "++"
        }
    },
    mark: {
        open(attributes) {
            return "=="
        },
        text: defaultText,
        close() {
            return "=="
        }
    },
    sub: {
        open(attributes) {
            return "~"
        },
        text: defaultText,
        close() {
            return "~"
        }
    },
    sup: {
        open(attributes) {
            return "^"
        },
        text: defaultText,
        close() {
            return "^"
        }
    },
    a: {
        open:(attributes)=>{
            return "[";
        },
        text: defaultText,
        close(context) {
            const tag=context.tagStack.last()
            return "]("+(tag.attributes?.href ?? '')+ (tag.attributes?.title ? ` "${tag.attributes.title}"`:'')+")"
        }
    },
    img: {
        open:(attributes)=>{
            return "!["+(attributes?.alt ?? '')+"]("+(attributes?.src ?? '')+(attributes?.title ? ` "${attributes.title}"`:'')+")"
        },
        text: defaultText,
        close(context) {
            
            return ""
        }
    },
    ul: {
        open(attributes) {
            return "\n"
        },
        text: defaultText,
        close() {
            return "\n"
        }
    },
    ol: {
        open(attributes) {
            return "\n"
        },
        text: defaultText,
        close() {
            return "\n"
        }
    },
    li: {
        open(attributes,context) {
            const listHirachy=context.tagStack.getTags(['ul','ol']);
            const level = Math.max(0,listHirachy.length-1)
            const currentType=listHirachy[Math.max(0,listHirachy.length-1)].tagname
            return " ".repeat(2*level)+(currentType==='ul'?"- ":((attributes?.start??1)+". "))
        },
        text: defaultText,
        close(context) {
            return "\n"
        }
    },
    code: {
        open(attributes,context) {
            const listHirachy=context.tagStack.getTags(['pre']);
            return listHirachy.length===0?'`':''
        },
        text: (text)=>text,
        close(context) {
            const listHirachy=context.tagStack.getTags(['pre']);
            return listHirachy.length===0?'`':''
        },
    },
    pre: {
        open(attributes) {
            const codeLanguageClass=attributes?.class?.split(/\s/).find(className=>className.startsWith('language-'))
            return "\n```"+(codeLanguageClass?' '+codeLanguageClass.substr(9):'')+"\n"
        },
        text: (text)=>text,
        close() {
            return "\n```\n"
        },
    }
}

export const inlineElement = [
    "a",
    "abbr",
    "acronym",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "br",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "object",
    "output",
    "picture",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "tt",
    "var",
    "video",
    "wbr",
]