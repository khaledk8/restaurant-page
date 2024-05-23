

export default function styleNav () {

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')
const navbar = document.getElementById('navbar')
const header = document.getElementById('header')

header.classList.add('flex', 'flex-initial', 'justify-center', 'items-center', 'min-h-52', 'bg-gray-700', 'opacity-75')
navbar.classList.add('flex', 'flex-initial', 'justify-around', 'items-center', 'min-w-full')
homeButton.classList.add('text-white', 'text-4xl')
menuButton.classList.add('text-white', 'text-4xl')
aboutButton.classList.add('text-white', 'text-4xl')


}