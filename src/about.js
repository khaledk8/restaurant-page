

export default function addAbout () {
    const container = document.createElement('div')
    container.classList.add('h-2/3', 'bg-gray-700', 'opacity-80', 'min-h-96', 'w-4/5', 'p-12', 'flex', 'flex-col', 'gap-10', 'items-center')

    const titleH = document.createElement('h1')
    titleH.classList.add('text-white', 'text-7xl')
    titleH.textContent = 'Contact'

    const homeP = document.createElement('p')
    homeP.classList.add('text-white', 'text-4xl')
    homeP.textContent = "+0 12345678"

    container.appendChild(titleH)
    container.appendChild(homeP)

    return container
}