let mainDiv = document.querySelector('.mainDiv')
let divs = document.querySelectorAll('.main div')
if (window.localStorage.getItem("colors") !== null) {
    let x = JSON.parse(window.localStorage.getItem("colors"))
    mainDiv.style.background = x;
}
for (let i = 0; i < divs.length; i++) {
    const color = divs[i];
    color.addEventListener('click', function () {
        let mainColor = divs[i].getAttribute("class")
        mainDiv.style.backgroundColor = mainColor;
        window.localStorage.setItem("colors", JSON.stringify(mainColor))

    })

}