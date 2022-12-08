const $textbox_background = document.querySelector('#textbox-background')
const $name_field = document.querySelector('#name-field')
const $content_field = document.querySelector('#content-field')
const $select_background = document.querySelector('#select-background')
const $menu1 = document.querySelector('#menu1')
const $menu2 = document.querySelector('#menu2')
const $button_textbox_background = document.querySelector('#button-textbox-background')


indexOfOrder = 0
function nextOrder() {
    if (orderList[indexOfOrder].type === 'text') {
        $content_field.textContent = orderList[indexOfOrder].text
        indexOfOrder ++
    } else {
        onSelect()

        $menu1.textContent = orderList[indexOfOrder].a
        $menu2.textContent = orderList[indexOfOrder].b
    }
}

let answer = ''

function menuTouch1() {
    console.log('menu1 touched')
    let id = orderList[indexOfOrder].id
    answer = orderList[indexOfOrder].a
    if (answer === orderList[indexOfOrder].best) {

        offSelect()
        indexOfOrder ++
        nextOrder()
    } else {
        $content_field.textContent = wrongAnswerList[id].text
        offSelect()

    }
}

function menuTouch2() {
    console.log('menu2 touched')
    let id = orderList[indexOfOrder].id
    answer = orderList[indexOfOrder].b
    console.log(answer)
    if (answer === orderList[indexOfOrder].best) {

        offSelect()
        indexOfOrder ++
        nextOrder()
    } else {
        $content_field.textContent = wrongAnswerList[id].text
        offSelect()


    }
}

$menu1.addEventListener('touchstart', menuTouch1)
$menu2.addEventListener('touchstart', menuTouch2)

$button_textbox_background.addEventListener('touchstart', nextOrder)

function offSelect() {
    $select_background.className = 'hidden'
    $menu1.className = 'hidden'
    $menu2.className = 'hidden'
}

function onSelect() {
    $select_background.className = 'visible'
    $menu2.className = 'visible'
    $menu1.className = 'visible'
}

const orderList = [
    {type : 'text', name: '???', text: '그럼, 게임을 시작하지.'},
    {type : 'text', name: '', text: '2022년 8월 9일 오후 4시 16분. 3.53kg의 최시우가 태어났습니다'},
    {type : 'select', id: 0, name: '', a: '1. 기쁨의 눈물을 흘린다.', b: '2. 도망간다', best: '1. 기쁨의 눈물을 흘린다.'},
    {type : 'text', name: '최시우', text: '탁월한 선택입니다. 훌륭한 부모님이 되시겠군요(짝짝짝짝!!)'},
    {type : 'text', name: '', text: '산후조리원에 입소 했습니다'},
    {type : 'text', name: '', text: '시우가 울음을 멈추지 않습니다. 어떻게 해야 할까요?'},
    {type : 'select', id: 1, name: '', a: '1. 울음을 달래본다', b: '2. 신생아실에 데려다 준다', best: '2. 신생아실에 데려다 준다'},
    {type : 'text', name: '', text: '끝입니다.'},
]

const wrongAnswerList = [
    {n: 0, text: '틀렸습니다. 다시 선택하세요'},
    {n: 0, text: '틀렸습니다. 체력이 넘치시나보군요. 다시 선택 하세요'},
]