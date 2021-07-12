
/*Oi gente, os cookies nao deram certo então apenas coloquei
os botões pra fechar a mensagem de cookie */

function cookies(){
    
    const secao = document.getElementById('cookies');
    const bt = document.getElementById('btSim');
    const bt2 = document.getElementById('btNao');
    const bt3 = document.getElementById('close');

    bt.addEventListener("click", del());
    bt2.addEventListener("click", del());
    bt3.addEventListener("click", del());
    
    
    
    function del() {
            secao.remove();
    }
    


}
