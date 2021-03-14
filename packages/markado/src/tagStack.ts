export class TagStack {
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