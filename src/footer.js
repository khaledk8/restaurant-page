

export default function styleFooter () {
    const footer = document.getElementById('footer')
    footer.classList.add('min-h-8', 'bg-gray-700', 'opacity-75', 'flex', 'p-6', 'flex-row-reverse')

    const para = document.createElement('p')
    const spanOne = document.createElement('span')
    const spanTwo = document.createElement('span')

    footer.appendChild(para)
    para.appendChild(spanOne)
    para.appendChild(spanTwo)

    spanOne.textContent = 'Khaled'
    spanTwo.innerHTML = `Background Image by <a href="https://unsplash.com/@shawnanggg">shawnanggg</a>`

    para.classList.add('flex', 'justify-center', 'w-6/12')
    spanOne.classList.add('text-white', 'font-bold', 'mr-auto')
    spanTwo.classList.add('text-white')
}