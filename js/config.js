function abrirConfig(){
    const config = document.getElementById('config');

    config.style.display = "block";
}

function fecharConfig(){
    const config = document.getElementById('config');

    window.onclick = (evento) => {
        if(evento.target == config)
            config.style.display = "none";
    }

}

