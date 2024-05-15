const title = document.getElementById('title')
title.textContent = '????'
title.style.color = 'red'

const img = document.createElement('img') // <img>
img.src =
  'https://www.vetocanis.com/cdn/shop/articles/pexels-peng-louis-3073694.jpg?v=1700569135'
img.alt = 'Petit chat'
img.style.width = '400px'

const bacG = document.getElementById('bacG')
const bacP = document.getElementById('bacP')
const other = document.getElementById('other')

bacG.addEventListener('click', () => {
  document.body.appendChild(img)
})
bacP.addEventListener('click', () => {
  document.body.removeChild(img)
})
other.addEventListener('click', () => {
  document.body.removeChild(img)
})

const themeButton = document.querySelector('.fa-circle-half-stroke')
themeButton.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'rgb(53, 53, 53)') {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    themeButton.style.color = "white"
    themeButton.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = 'rgb(53, 53, 53)'
    document.body.style.color = 'white'
    themeButton.style.color = 'black'
    themeButton.style.backgroundColor = 'white'
  }
})
