import EventBus from "./eventBus.js";

class Model extends EventBus{
    constructor(options) {
        super()
        const keys= ['data','create','delete','update','get']
        keys.forEach((key)=>{
            if(key in options){
                this[key]=options[key]
            }
        })
    }
    create() {
        console?.error ?.('你还没实现create') //可选链语法
    }
    delete() {
        console?.error ?.('你还没实现delete')
    }
    update() {
        console?.error ?.('你还没实现update')
    }
    get() {
        console?.error ?.('你还没实现get')
    }
}

export  default Model