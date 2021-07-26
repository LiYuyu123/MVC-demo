import $ from 'jquery'
//eventBus对象间的通信
class EventBus{
    constructor() {
        this._eventBus=$(window)
    }
    on(eventName,fn){
        return this._eventBus.on(eventName,fn)
    }
    trigger(eventName,data){
        return this._eventBus.trigger(eventName,data)
    }
    off(eventName,fn){
        return this._eventBus.off(eventName,fn)
    }
}

export  default EventBus