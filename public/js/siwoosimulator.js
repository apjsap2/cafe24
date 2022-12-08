const $textbox_background = document.querySelector('#textbox-background')
const $name_field = document.querySelector('#name-field')
const $content_field = document.querySelector('#content-field')
const $select_background = document.querySelector('#select-background')
const $select_field = document.querySelector('#select-field')



$textbox_background.style.display = ''
$name_field.style.display = ''
$content_field.style.display = ''
$select_background.style.display = 'none'
$select_field.style.display = 'none'


function preSelect() {
    $select_background.style.display = ''
    $select_field.style.display = ''
}

function postSelect() {
    $select_background.style.display = 'none'
    $select_field.style.display = 'none'
}

function 