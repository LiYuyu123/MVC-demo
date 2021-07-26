import './app2.css'
import $ from 'jquery'
import Model from "./base/Model.js";
import View from "./base/View.js";

const localKey = 'app2.index'

const m= new Model({
    data: {
        //初始化数据
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    update(data) {
        Object.assign(m.data, data)
        m.trigger('m:update')
        localStorage.setItem(localKey, m.data.index)
    }
})

const init=(el)=> {
    new View ({
            data:m.data,
            el: el,
            html(index){
                return `
          <div>
               <ol class="tab-bar">
                   <li class="${index === 0 ? 'selected' : ''}" data-index='0' >1</li>
                   <li class="${index === 1 ? 'selected' : ''}" data-index='1'>2</li>
               </ol>
               <ol class="tab-content">
                   <li class="${index === 0 ? 'active' : ''}" >内容1</li>
                   <li class="${index === 1 ? 'active' : ''}" >内容2</li>
               </ol>
         </div>
       `
            },
            render(data) {
                const index=data.index
                if (this.el.length !== 0) this.el.empty()
                $(this.html(index)).appendTo(this.el)
            },

            //表驱动编程
            events: {
                'click .tab-bar li': 'x',
            },
            x(e) {
                const index = parseInt(e.currentTarget.dataset.index)
                m.update({index: index})
            }
        }
    )
}


export  default init
