
export default function addMenu () {

    const container = document.createElement('div')
    container.classList.add('h-2/3', 'bg-gray-700', 'opacity-80', 'min-h-96', 'w-4/5', 'p-12', 'flex', 'flex-col', 'gap-10', 'items-center')

    const titleH = document.createElement('h1')
    titleH.classList.add('text-white', 'text-7xl')
    titleH.textContent = 'Menu'

    const menuDiv = document.createElement('div')
    menuDiv.classList.add('flex', 'flex-col', 'gap-2.5', 'min-w-full')

    container.appendChild(titleH)
    container.appendChild(menuDiv)

    const itemOne = document.createElement('p')
    const itemTwo = document.createElement('p')
    const itemThree = document.createElement('p')
    const itemFour = document.createElement('p')
    const itemFive = document.createElement('p')

    const spanOne = document.createElement('span')
    const spanTwo = document.createElement('span')
    const spanThree = document.createElement('span')
    const spanFour = document.createElement('span')
    const spanFive = document.createElement('span')

    const priceOne = document.createElement('span')
    const priceTwo = document.createElement('span')
    const priceThree = document.createElement('span')
    const priceFour = document.createElement('span')
    const priceFive = document.createElement('span')

    menuDiv.appendChild(itemOne)
    menuDiv.appendChild(itemTwo)
    menuDiv.appendChild(itemThree)
    menuDiv.appendChild(itemFour)
    menuDiv.appendChild(itemFive)

    itemOne.appendChild(spanOne)
    itemOne.appendChild(priceOne)

    itemTwo.appendChild(spanTwo)
    itemTwo.appendChild(priceTwo)

    itemThree.appendChild(spanThree)
    itemThree.appendChild(priceThree)

    itemFour.appendChild(spanFour)
    itemFour.appendChild(priceFour)

    itemFive.appendChild(spanFive)
    itemFive.appendChild(priceFive)

    spanOne.textContent = 'Late'
    spanTwo.textContent = 'Cappuccino'
    spanThree.textContent = 'Espresso'
    spanFour.textContent = 'Americano'
    spanFive.textContent = 'Velvet Coffee'

    priceOne.textContent = '$1.99'
    priceTwo.textContent = '$2.99'
    priceThree.textContent = '$1.99'
    priceFour.textContent = '$1.99'
    priceFive.textContent = '$3.99'

    itemOne.classList.add('flex', 'justify-around', 'text-white', 'text-4xl')
    itemTwo.classList.add('flex', 'justify-around', 'text-white', 'text-4xl')
    itemThree.classList.add('flex', 'justify-around', 'text-white', 'text-4xl')
    itemFour.classList.add('flex', 'justify-around', 'text-white', 'text-4xl')
    itemFive.classList.add('flex', 'justify-around', 'text-white', 'text-4xl')

    priceOne.classList.add('font-bold')
    priceTwo.classList.add('font-bold')
    priceThree.classList.add('font-bold')
    priceFour.classList.add('font-bold')
    priceFive.classList.add('font-bold')

    return container

}