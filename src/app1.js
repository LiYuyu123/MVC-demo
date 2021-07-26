import './app1.css'
import $ from 'jquery'
import Model from "./base/Model.js";
import View from "./base/View.js";




//数据相关的放到m

const m = new Model({
    data: {
        n: parseFloat(localStorage.getItem('n')) || 100
    },
    update(data) {
        Object.assign(m.data, data)
         m.trigger('m:update')
        localStorage.setItem('n', m.data.n)
    }
})//初始化数据


//视图相关的反到v

const init = (el) => {
    new View({
            data: m.data,
            el: el,
            html: `
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
                  </div>`
           ,
            render(data) {
                if (this.el.length !== 0) this.el.empty()
                const n=data.n
                $(this.html.replace('{{n}}', n))
                    .appendTo(this.el)
            },
            //表驱动编程
            events: {
                'click #add1': 'add',
                'click #minus1': 'minus',
                'click #mul2': 'mul',
                'click #divide2': 'div'
            },
            add() {
                m.update({n: m.data.n + 1})
            },
            minus() {
                m.update({n: m.data.n - 1})
            },
            mul() {
                m.update({n: m.data.n * 2})
            },
            div() {
                m.update({n: m.data.n / 2})
            }
        }
    )
}

// 把init给导出出来让main.js可以引用
export default init









