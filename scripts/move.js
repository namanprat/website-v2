const section = document.querySelector('section')

const image = section.querySelector('div.image')
const shadow = section.querySelector('div.shadow')
const title = section.querySelector('h2')
const titlePink = section.querySelector('div.image h2')

let aimX = 0
let aimY = 0
let imageX = 0
let imageY = 0
let shadowX = 0
let shadowY = 0
let titleX = 0
let titleY = 0
let backgroundX = 0
let backgroundY = 0

const move = (event) => {
  aimX = (2 * event.clientX) / window.innerWidth - 1
  aimY = (2 * event.clientY) / window.innerHeight - 1
}

const animate = () => {
  imageX += (aimX - imageX) * 0.1
  imageY += (aimY - imageY) * 0.1

  shadowX += (aimX - shadowX) * 0.05
  shadowY += (aimY - shadowY) * 0.05

  titleX += (aimX - titleX) * 0.2
  titleY += (aimY - titleY) * 0.2

  backgroundX += (aimX - backgroundX) * 0.2
  backgroundY += (aimY - backgroundY) * 0.2

  image.style.transform = `translate(${3 * imageX}rem, ${3 * imageY}rem)`
  shadow.style.transform = `translate(${3 * shadowX}rem, ${3 * shadowY}rem)`
  title.style.transform = `translate(${1 * titleX}rem, ${1 * titleY}rem)`

  image.style.backgroundPosition = `${50 - 25 * backgroundX}% ${40 - 20 * backgroundY}%`

  let titlePinkX = 1 * titleX - 3 * imageX
  let titlePinkY = 1 * titleY - 3 * imageY

  titlePink.style.transform = `translate(${titlePinkX}rem, ${titlePinkY}rem)`

  requestAnimationFrame(animate)
}

animate()
document.addEventListener('mousemove', move)
