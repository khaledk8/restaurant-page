import './output.css'
import styleNav from './navbar'
import myImage from './image.jpg'
import addHome from './home'
import styleFooter from './footer'

const content = document.getElementById('content')
content.classList.add('p-7', 'flex', 'justify-center', 'items-center')

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')

const body = document.body
body.style.backgroundImage = `url(${myImage})`
body.classList.add('flex', 'flex-col', 'gap-20', 'justify-between')

styleNav()
styleFooter()
content.appendChild(addHome())

homeButton.addEventListener('click', () => {
    content.removeChild(content.firstChild)
    content.appendChild(addHome())
})


