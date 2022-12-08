const $textbox_background = document.querySelector('#textbox-background')
const $name_field = document.querySelector('#name-field')
const $content_field = document.querySelector('#content-field')
const $select_background = document.querySelector('#select-background')
const $menu1 = document.querySelector('#menu1')
const $menu2 = document.querySelector('#menu2')



$textbox_background.style.visibility = 'visible'
$name_field.style.visibility = 'visible'
$content_field.style.visibility = 'visible'
$select_background.style.visibility = 'hidden'
$menu1.style.visibility = 'hidden'
$menu2.style.visibility = 'hidden'



function preSelect() {
    $select_background.style.visibility = 'visible'
    $menu1.style.visibility = 'visible'
    $menu2.style.visibility = 'visible'
}

function postSelect() {
    $select_background.style.visibility = 'hidden'
    $menu1.style.visibility = 'hidden'
    $menu2.style.visibility = 'hidden'
}

function getTextToContentField(text) {
    preSelect()
    $content_field.textContent = text
    postSelect()
}

$textbox_background.addEventListener('click', nextOrder)


let indexForNextOrder = 0
function nextOrder() {
    $content_field.textContent = orderList[indexForNextOrder]
    index
}

const orderList = [
    '2022년 8월 9일 오후 4시 16분. 3.53kg의 최시우가 태어났습니다',
    '탁월한 선택입니다. 훌륭한 부모님이 되시겠군요(짝짝짝짝!!)'
]