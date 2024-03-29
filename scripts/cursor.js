const cursor = document.getElementById("cursor");
const animatecursor = (e, interacting) => {
    const x = e.clientX - cursor.offsetWidth / 2,
        y = e.clientY - cursor.offsetHeight / 2;
    const keyframes = {
        transform: `translate(${ x }px, ${ y }px) scale(${interacting?0:1})`
    };
    cursor.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    })
}
window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
    const icon = document.getElementById("cursor-icon");
    animatecursor(e, interacting);
    cursor.dataset.type = interacting ? interactable.dataset.type : ""
}

var getTime = function() {
    document.getElementById("time").innerHTML = new Date().toLocaleString("en-IN", {
        timeZone: 'Asia/Kolkata',
        timeStyle: 'long',
        hourCycle: 'h24'
    })
};
getTime();
setInterval(getTime, 1000);