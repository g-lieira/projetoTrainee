

const rmv = document.getElementById('limpar')
const adic = document.getElementById('adition')


adic.addEventListener("click", adiciona())
    
function adiciona() {
    var input = document.getElementById('background')
    var link = input.value
        
    const x = {
        bg: getStyle(html, "--bg")
    }

    const mudando = document.body.style.background = "url("+link+") no-repeat"
    document.body.style.backgroundSize = "100%"

    const y = {
        bg: mudando
    }

    input.value = "";
}

rmv.addEventListener("click", remove())
    
function remove() {
    document.body.style.background = null
}






