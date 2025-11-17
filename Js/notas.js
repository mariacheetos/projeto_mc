var cor=["azul","verde","roxo"]
var cont=0

function Adicionar(){
var texto= document.getElementById("nota").value
var novo=document.createElement("p")
novo.innerText= texto
novo.id="paragrafo"

var urgente=document.getElementById("urgente").checked
if(urgente){

    if (cont == 0) {
    novo.classList.add("azul");
    } 
    else if (cont == 1) {
    novo.classList.add("verde");
    } 
    else if (cont == 2) {
    novo.classList.add("roxo");
    }
    cont = cont + 1;
        if (cont == 3) {
            cont = 0;
        }
var container=document.getElementById("container")
container.appendChild(novo)
}

else{
    var containernu=document.getElementById("naoUrgente")
    containernu.appendChild(novo)
}
}

function Remover(){
    var paragrafo= document.getElementById("paragrafo")
    if(paragrafo){
    paragrafo.remove();
}
    else{
    alert("Não há texto para remover!")
}
}

function RemoverTudo(){
    var paragrafo=document.getElementById("paragrafo")
    if(paragrafo){
        container.remove()
    }
}