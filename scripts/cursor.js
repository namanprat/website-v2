const cursor = document.querySelector("div.cursor")
const dot = cursor.querySelectorAll("div")

let aimX = 0
let aimY = 0

dot.forEach((dot, index) => {
    let currentX = 0
    let currentY = 0

    let speed = 0.45 - index * 0.025

    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed

        dot.style.left = currentX + "px"
        dot.style.top = currentY + "px"
    
        requestAnimationFrame(animate)
    }
    
    animate()
})

document.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
})