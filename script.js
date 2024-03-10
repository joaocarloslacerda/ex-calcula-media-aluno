function calculaMedia(){

    let divResultado = document.getElementById("resultado");

    const notaUm = Number(document.getElementById("notaUm").value);
    const notaDois = Number(document.getElementById("notaDois").value);
    const notaTres = Number(document.getElementById("notaTres").value);

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

    console.log(resultado)
}