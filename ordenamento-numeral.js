let listaNumero = [];

function reiniciar() {
    listaNumero = [];
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("numero3").value = "";
    document.getElementById("resultado").innerHTML = "Nenhum número foi ordenado até agora.";
    containerBotaoAbilitado();
}

function containerBotaoDesabilitado() {
    document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado");
    document.getElementById("btn-reiniciar").classList.add("container__botao");
}

function containerBotaoAbilitado() {
    document.getElementById("btn-reiniciar").classList.add("container__botao-desabilitado");
    document.getElementById("btn-reiniciar").classList.remove("container__botao");
}



function ordenar() {
    let inputNumero1 = parseFloat(document.getElementById("numero1").value);
    let inputNumero2 = parseFloat(document.getElementById("numero2").value);
    let inputNumero3 = parseFloat(document.getElementById("numero3").value);
    if (!isNaN(inputNumero1)) listaNumero.push(inputNumero1);
    if (!isNaN(inputNumero2)) listaNumero.push(inputNumero2);
    if (!isNaN(inputNumero3)) listaNumero.push(inputNumero3);
    
    document.getElementById("resultado").innerHTML = `Os números escolhidos foram: ${listaNumero}.<br><br>A ordem dos números escolhidos é ${listaNumero.sort()}.`;
    console.log(listaNumero);
    console.log(listaNumero.sort());

    containerBotaoDesabilitado()
}

