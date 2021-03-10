import * as htmlparser2 from 'htmlparser2';
import { render, inlineElement, defaultText } from './render'

class TagStack {
    private stack=[];

    push(tagname:string,attributes:object){
        this.stack.push({tagname,attributes})
    }

    pop(){
        this.stack.pop()
    }

    last(){
        if (this.stack.length===0) return undefined;
        return this.stack[this.stack.length-1]
    }
    lastTagname(){
        if (this.stack.length===0) return undefined;
        return this.last().tagname;
    }

    getTags(filterTags){
        return this.stack.filter(tag =>(filterTags.includes(tag.tagname)))
    }
}

export function html2markdown(html: string, options?: object): string {
    let markdown = ''
    const tagStack = new TagStack()
    let lastTag = ''

    const opt = {
        removeElements: ['script', 'style'],
        ...options
    }

    const parser = new htmlparser2.Parser({
        onopentag(tagname, attributes) {
            /*
             * This fires when a new tag is opened.
             *
             * If you don't need an aggregated `attributes` object,
             * have a look at the `onopentagtag 
    nme` and `onattribute` events.
             */
            const lastTagname = tagStack.lastTagname()
            if (opt.removeElements.includes(lastTagname)) return;
            tagStack.push(tagname,attributes);
            if (opt.removeElements.includes(tagname)) return
            //if (A.size(A.intersection(StringEq)(opt.removeElements)(currentTag))>0) return;

            // if (tagname === "script" && attributes.type === "text/javascript") {
            //     console.log("JS! Hooray!");
            // }
            markdown += render?.[tagname]?.open(attributes, { tagStack, lastTag }) ?? ''

        },
        ontext(text) {
            /*
             * Fires whenever a section of text was processed.
             *
             * Note that this can fire at any point within text and you might
             * have to stich together multiple pieces.
             */
            const lastTagname = tagStack.lastTagname()
            if (opt.removeElements.includes(lastTagname)) return;
            markdown += render?.[lastTagname]?.text(text, { tagStack, lastTag }) ?? defaultText(text, { tagStack, lastTag })
        },
        onclosetag(tagname) {

            /*
             * Fires when a tag is closed.
             *
             * You can rely on this event only firing when you have received an
             * equivalent opening tag before. Closing tags without corresponding
             * opening tags will be ignored.
             */

            const lastTagname = tagStack.lastTagname()
            if (opt.removeElements.includes(lastTagname)) {
                if (tagname === lastTagname) {
                    tagStack.pop()
                    lastTag = tagname;
                }
                return;
            }

            if (!inlineElement.includes(tagname) && !['pre'].includes(tagname)) {
                markdown = markdown.trimRight()
            }
            markdown += render?.[tagname]?.close({ tagStack, lastTag }) ?? ''
            lastTag = tagname;
            tagStack.pop()
        }
    })

    parser.write(html);
    parser.end()
    return markdown
}

export function escape(text: string): string {
    return text.replace(/\+{2,}|[\!\"\#\$\%\&\'\(\)\*\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]/g, m => ("\\" + m))
}