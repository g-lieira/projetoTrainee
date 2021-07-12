


const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=tema]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const lightColors = {
    bg: getStyle(html, "--bg"),
    corBox: getStyle(html, "--cor-box"),
    corTexto: getStyle(html, "--cor-texto"),
}



const darkMode = {
    bg: "#232323",
    corBox: "#484E54",
    corTexto: "#FFFFFF",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(lightColors)
})

