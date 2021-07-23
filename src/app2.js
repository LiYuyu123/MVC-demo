import './app2.css'
import $ from 'jquery'
 
const $tabBar=$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')

$tabBar.on('click','li',e=>{
    const $li =$(e.currentTarget)
    const index=$li.index()
    $li.addClass('selected')
      .siblings().removeClass('selected')
    $tabContent.children().eq(index)//等于第几个时
         .addClass('active')
         .siblings().removeClass('active')//样式于行为分离
})
$tabBar.children().eq(0). trigger('click')  //默认1 自动点
 
