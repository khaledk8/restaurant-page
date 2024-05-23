


export default function addHome () {

    const container = document.createElement('div')
    container.classList.add('h-2/3', 'bg-gray-700', 'opacity-80', 'min-h-96', 'w-4/5', 'p-12', 'flex', 'flex-col', 'gap-10', 'items-center')

    const titleH = document.createElement('h1')
    titleH.classList.add('text-white', 'text-7xl')
    titleH.textContent = 'Capo Cafe'

    const homeP = document.createElement('p')
    homeP.classList.add('text-white', 'text-4xl')
    homeP.textContent = `Welcome to Capo Cafe, where every cup tells a story. Nestled in the heart of the city, our cozy spot offers a perfect blend of aromatic coffee, delectable pastries, and a warm, inviting atmosphere. Whether you're here for a morning boost, a leisurely afternoon, or a catch-up with friends, Capo Cafe is your go-to destination for delightful moments and rich flavors. Join us and savor the experience.`

    container.appendChild(titleH)
    container.appendChild(homeP)

    return container
}