// ******** API, BOM, DOM ********

// API - Aplication Proramming Inreface

// API или Application Programming Interface – это язык, на котором разговаривают между собой приложения, сайты, поисковые системы и серверы. Он выступает посредником между ними и позволяет понимать друг друга. Программный интерфейс задает правила общения между приложениями, сайтами или серверами, позволяет разработчикам связывать их между собой, внедрять новые функции, что в конечном итоге расширяет возможности бизнеса.

// BOM - Browser Object Model - Объектная модель браузера

// function getGeoOk (position) {
//     const long = position.coords.longitude
//     const lat = position.coords.latitude
    
//     console.log(`Широта: ${lat} `)
//     console.log(`Долгота: ${long}`)
//     console.log(position)
// }

// function onGeoError () {
//     console.log('Что - то пошло не так')
// }

// console.log(navigator.geolocation)

// navigator.geolocation.getCurrentPosition(getGeoOk, onGeoError)


// ******** history

// console.log(history)
// back() - назад
// forvard() - вперед

// ******** location

// console.log(location)

// ********screen 

// console.log(screen)


// ********* DOM - Document Objec Model *********
// ******** document

// document.title = 'Title from JS'
// console.log(document.title)


// document.write('String from JS') // ******** выводит строку на экран


// console.log(document.body.id)
// console.log(document.body.style)
// console.log(document.body.style.backgroundColor = 'orange')


// console.log(document.head)
// console.log(document.forms)

// ******** метод получить элемент по ID 
// const header = document.getElementById('main_header')
// console.log(header)

// ******** метод получить элементы по классу
// const item = document.getElementsByClassName('item')
// const item = document.getElementsByClassName('item')[0]
// console.log(item)

// ******** метод получить элементы по тэгу
// const p = document.getElementsByTagName('p')
// console.log(p)

// ******** метод получить элемент по name = '' - имени
// const byName = document.getElementsByName('test')
// console.log(byName)

// const element = document.querySelector('#main_header')
// null - если нету
// console.log(element)

// const lis = document.querySelectorAll('li')
// пустой массив если нету
// **** lenght - узнать количество
// console.log(lis.length)
// console.log(lis)

// lis.forEach((elem) => {
//     elem.style.backgroundColor = 'brown'
//     elem.style.fontSize = '20px'
//     elem.style.color = 'white'
// })


// mathes
// closest
// contains

// console.log(element.matches('div'))
// console.log(element.matches('h1'))

// const div = document.querySelector('.child-2')
// const divParent = document.querySelector('.parent')

// console.log(div.closest('.parent'))

// console.log(divParent.contains(div))

// **** id
// **** className
// **** style
// console.log(element.id)
// console.log(element.className)
// console.log(element.style)

// **** children - Возвращает дочерние элементы.
// console.log(document.body.children)

// parentElement - возвращает родительский элемент
// console.log(divParent.parentElement)

// **** nextElementSibling - следующий сосед
// **** previousElementSibling - предыдущий сосед
// console.log(divParent.nextElementSibling)
// console.log(divParent.previousElementSibling)



// console.log(element.textContent)
// console.log(element.innerHTML)
// console.log(element.outerHTML)

// element.textContent = 'Hello'

// element.innerHTML = '<a> Hello 2</a>'

// element.outerHTML = '<h5>New header from JS OUTER HTML</h5>'

// const randomColor = Math.floor(Math.random() * 16777216).toString(16)

// document.body.style.backgroundColor = '#' + randomColor

// console.log('#' + randomColor)


// ******** DOM-2 *********

// const newDiv = document.createElement('div')
// newDiv.className = 'first'
// newDiv.textContent = 'Content from JS'

// const newDiv2 = document.createElement('div')
// newDiv2.className = 'first'
// newDiv2.textContent = 'Second div from js'


// **** append - добявляет узел в конец узла
// **** prepend - добавляет узел в начало узла
// **** before - добвляет узел до узла
// **** after - добвляет узел после узла
// **** replaceWith - заменяет узел переданным узлом

// ****через запятую можно добавлять несколько узлов

// const insertDiv = document.querySelector('.insert')
// newDiv.append(newDiv2)
// insertDiv.append(newDiv)
// insertDiv.prepend(newDiv)
// insertDiv.before(newDiv)
// insertDiv.after(newDiv)
// insertDiv.replaceWith(newDiv)


// **** insertAdjacentHTML - HTML строка, вставляется как HTML код.
// **** insertAdjacentText - вставляем в виде текста
// **** insertAdjacentElement - вствляет элемент

// * 'beforebegin' - в начале перед элементом
// * 'afterbegin' - в начале внутрий элемента
// * 'beforeend' - в конце внутрий элемента
// * 'afterend' - в конце после элемента

// **** insertAdjacentHTML
// insertDiv.insertAdjacentHTML('beforebegin', '<p>My text </p>')
// insertDiv.insertAdjacentHTML('afterbegin', '<p>My text </p>')
// insertDiv.insertAdjacentHTML('beforeend', '<p>My text </p>')
// insertDiv.insertAdjacentHTML('afterend', '<p>My text </p>')

// **** insertAdjacentText
// insertDiv.insertAdjacentText('beforebegin', '<p>My text </p>')

// **** insertAdjacentElement
// insertDiv.insertAdjacentElement('beforebegin', newDiv)


// **** удаление
// insertDiv.remove()


// **** cloneNode(true) - копирование узла
// аргумент: true или false
// *true - глубокая копия с вложенными элементы
// *false - копия без вложенных элементов
// const test = insertDiv.cloneNode(true)
// console.log(test)


// **** attr - attributes - атрибуты

// * .hasAttribute('') - проверить наличие атрибута
// true или false
// console.log(insertDiv.hasAttribute('someattr'))

// * getAttribute('') - получить значение атрибута
// console.log(insertDiv.getAttribute('someattr'))

// * data('имя', 'значение') - добавить атрибут
// insertDiv.setAttribute('newattr', 'my new attr value')

// * removeAttribute('имя атрибута') - удалить атрибут
// insertDiv.removeAttribute('newattr')

// console.log(insertDiv.attributes) // * получить все атрибуты


// **** живые не живые
// const lis = document.querySelectorAll('.item') // не жывые
// const li_s = document.querySelector('.lis').children // живые
// const lis2 = document.getElementsByClassName('item') // живые

// document.getElementsByClassName('item')[0].remove() 

// const lisNew = document.querySelectorAll('.item')

// console.log(lis[0])
// console.log(lis2)
// console.log(lisNew)
// console.log(li_s)


// **** классы
// * classList.add() - добавить
// * classList.remove() - удалит
// * classList.toggle() - если класс есть - удалит, если класса нет - добаваит
// * classList.contais() - проверить наличие класса

// insertDiv.classList.add('new_class')
// insertDiv.classList.remove('new_class')
// insertDiv.classList.toggle('new_class')


// console.log(insertDiv.className)
// console.log(insertDiv.classList.contains('new_class'))



// ***** события

// const btn = document.querySelector('button')

// function clickHandler () {
//     alert('Hello')
// }

// btn.ondblclick = clickHandler
// btn.onclick = clickHandler

// document.body.oncontextmenu = function () {
//     alert('menu')
// }

// **** addEventListener()

// btn.addEventListener('click', clickHandler)
// btn.addEventListener('click', function () {
//     alert('second')
// })

// btn.addEventListener('mouseenter', function () {
    
//     console.log('mouse enter')
// })

// btn.addEventListener('mousemove', function () {
//     console.log('mouse move')
// })

// btn.addEventListener('mouseleave', function () {
//     console.log('mouse leave')
// })

// document.body.addEventListener('keydown', function(event) {
//     console.log(event.key)
//     console.log(event.code)
// })



// const form = document.querySelector('.frm')
// const div = document.querySelector('.inner_div')
// const p = document.querySelector('.inner_p')

// *** всплытие
// *** event bubbling
// form.addEventListener('click', () => {
//     console.log('form')
// })

// div.addEventListener('click', () => {
//     console.log('div')
// })

// *** event.defaultPrevented - отменено ли поведение по умолчанию

// p.addEventListener('click', (e) => {
//     event.stopPropagation() // *** метод отмены всплытия или погружения
//     event.stopImmediatePropagation() // *** отменяте работу других обработчиков
//     console.log('p')
//     console.log(e)
// })

// p.addEventListener('click', () => {

//     console.log('second click p')
// })

// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault() // *** отменить действя по умолчанию 
// })

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'F12') {
//         event.preventDefault()
//     }
// })

// document.addEventListener('selectstart', (event) => {
//     event.preventDefault()
// })



// *** погружение
// *** capturing phase
// form.addEventListener('click', () => {
//     console.log('form')
// }, true)

// div.addEventListener('click', () => {
//     console.log('div')
// }, true)

// p.addEventListener('click', () => {
//     console.log('p')
// }, true)

// event.bubbles - является ли событие всплывающим


// p.addEventListener('click', ({clientX, clientY}) => {
//     console.log(`X: ${clientX} Y: ${clientY}`)
// })


// p.addEventListener('click', (e) => {
//     console.log(e)
// })


// const button = document.querySelector('.btn')

// button.addEventListener('click', (e) => {
    // *** target - ссылка на объект, который инициировал событие
    // *** currentTarget - элемент, на котором установлен обработчик события
    // console.log(e.target.textContent)
    // console.log('target', e.target)
    // console.log('currentTarget', e.currentTarget)
// })


// *** делегирование событий
// const spisok = document.querySelector('.list')

// spisok.addEventListener('click', ({target}) => {
//     if (target.nodeName === 'LI') {
//         console.log(target.textContent)
//         target.classList.toggle('active')
//     }
// })


// const input = document.querySelector('input')
// const form = document.querySelector('form')
// const key = document.querySelector('.key_out')
// const output = document.querySelector('.output')



form.addEventListener('keydown', (event) => {
    const keyValue = event.key
    const inputValue = event.target.value

    if (keyValue === 'Enter' && inputValue.length > 0 && event.target.type === 'text') {
        const outputMessageElem = document.createElement('div')
        outputMessageElem.classList.add('message')
        outputMessageElem.innerText = inputValue
        output.append(outputMessageElem)
        event.target.value = ''
    }   
    key.textContent = keyValue
})


input.addEventListener('change', (e) => {
    console.log(e.target.value)
})

input.addEventListener('input', (e) => {
    console.log(e.target.value)
})

input.addEventListener('copy', (e) => {
    console.log(e.target.value)
})