function calculaMedia(){

    let divResultado = document.getElementById("resultado");

    const notaUm = document.getElementById("notaUm").value;
    const notaDois = document.getElementById("notaDois").value;
    const notaTres = document.getElementById("notaTres").value;

    let resultado = (notaUm+notaDois+notaTres) / 3;

    if(resultado > 5.9){
        divResultado.innerHTML = "APROVADO";
        divResultado.style.marginLeft = "110px";
        divResultado.style.color = "green";
    }
    else{
        divResultado.innerHTML = "REPROVADO";
        divResultado.style.marginLeft = "105px";
        divResultado.style.color = "red";
    }
}