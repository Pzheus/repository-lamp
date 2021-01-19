var ligado = document.getElementById("ligado")
var desligado = document.getElementById("desligado")
var lampada = document.getElementById("lampada")

 function vlampQuebrada () {
    return lampada.src.indexOf ("quebrada") > -1
} 

 function lampLigada () {
    if (!vlampQuebrada()) 
        lampada.src = "imagens/ligada.jpg"    
} 

 function lampDesligada () {
    if (!vlampQuebrada())
        lampada.src = "imagens/desligada.jpg"
}

function lampQuebrada () {
    lampada.src = "imagens/quebrada.jpg"
} 

ligado.addEventListener("click", lampLigada)
desligado.addEventListener("click", lampDesligada)
lampada.addEventListener("mouseenter", lampLigada)
lampada.addEventListener("mouseleave", lampDesligada)
lampada.addEventListener("dblclick", lampQuebrada)