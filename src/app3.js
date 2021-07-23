import './app3.css'
import $ from 'jquery'

const $square=$('#app3 .square')
$square.on('click',()=>{
    $square.toggleClass('active')//默认有就删除active ，没有就加
})