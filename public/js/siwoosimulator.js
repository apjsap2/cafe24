const $textbox_background = document.querySelector('#textbox-background')
const $name_field = document.querySelector('#name-field')
const $content_field = document.querySelector('#content-field')
const $select_background = document.querySelector('#select-background')
const $menu1 = document.querySelector('#menu1')
const $menu2 = document.querySelector('#menu2')
const $button_textbox_background = document.querySelector('#button-textbox-background')



let indexForNextOrder = 0
function nextOrder() {

    $content_field.textContent = orderList[indexForNextOrder]
    indexForNextOrder ++
}


$button_textbox_background.addEventListener('click', () => {
    alert('cdsaasdc')
})




const orderList = [
    '2022년 8월 9일 오후 4시 16분. 3.53kg의 최시우가 태어났습니다',
    '탁월한 선택입니다. 훌륭한 부모님이 되시겠군요(짝짝짝짝!!)'
]