import './app4.css'
import $ from 'jquery'

const $circle=$('#app4 .circle')
$circle.on('mouseenter',()=>{ //鼠标移进事件
    $circle.addClass('active')
}).on('mouseleave',()=>{ //鼠标移出事件
    $circle.removeClass('active')
})