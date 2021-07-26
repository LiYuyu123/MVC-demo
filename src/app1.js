import './app1.css'
import $ from 'jquery'
import Model from "./base/Model";

const eventBus=$(window) //eventBus对象间的通信

//数据相关的放到m

const m=new Model({
    data:{
        n: parseInt(localStorage.getItem('n')) || 100
    },
    update(data){
        Object.assign(m.data,data)
        eventBus.trigger('m:update')
        localStorage.setItem('n',m.data.n)
     }
})//初始化数据





//视图相关的反到v

//其他c
const view={
    el:null,
    html:`
       <div>   
        <div class="output">
          <span id="number">{{n}}</span>
        </div>
        <div class="actions">
          <button id="add1">+1</button>
          <button id="minus1">-1</button>
          <button id="mul2">*2</button>
          <button id="divide2">÷2</button>
        </div>
       </div>
       `,
    init(container){
        view.el=$(container)
        view.render(m.data.n) //view=render(data)
        view.autoBindEvents()
        eventBus.on('m:update',()=>{
            view.render(m.data.n)
            }
        )
    },
    render(n) {
        if (view.el.length !== 0) view.el.empty()
        $(view.html.replace('{{n}}', n))
            .appendTo(view.el)
    },
        //表驱动编程
    events:{
        'click #add1':'add',
        'click #minus1':'minus',
        'click #mul2':'mul',
        'click #divide2':'div'
    },
    add(){
        m.update({n:m.data.n+1})
    },
    minus(){
        m.update({n:m.data.n-1})
    },
    mul(){
        m.update({n:m.data.n*2})
    },
    div(){
        m.update({n:m.data.n/2})
    },
    autoBindEvents(){
        for(let key in view.events){
            const value=view[view.events[key]]
            const spaceIndex=key.indexOf(' ')
            const part1=key.slice(0,spaceIndex)
            const part2=key.slice(spaceIndex+1)
            view.el.on(part1,part2,value)
        }
    }
}


// 把c给导出出来让main.js可以引用
export  default view









