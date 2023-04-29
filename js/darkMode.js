


const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=tema]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


/*recebe as cores do modo light*/
const lightColors = {
    bg: getStyle(html, "--bg"),
    corBox: getStyle(html, "--cor-box"),
    corTexto: getStyle(html, "--cor-texto"),
}

//recebe novas cores
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
     if(colors == darkMode){
        const btnADD = document.getElementById("mais").style.backgroundImage = "url(/assets/plus-square-solid2.png)";
     } else if (colors == lightColors){
        const btnADD = document.getElementById("mais").style.backgroundImage = "url(/assets/plus-square-solid1.png)";
     }
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(lightColors)
})


