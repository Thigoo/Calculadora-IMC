const result = document.getElementById("res");


function calcular() {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    let imc = (peso / (altura * altura)).toFixed(2);

    if (nome == "" || peso == "" || altura == "") {
        result.innerHTML = "Preencha corretamente as informações";
    } else if (imc < 18.5) {
        result.innerHTML = `Olá ${nome}, seu IMC é ${imc} e você está abaixo do peso ideal`;
    } else if (imc < 24.9) {
        result.innerHTML = `Olá ${nome}, seu IMC é ${imc} e você está com  o peso ideal`;
    } else if (imc < 29.9) {
        result.innerHTML = `Olá ${nome}, seu IMC é ${imc} e você está acima peso ideal`;
    } else if (imc < 34.9) {
        result.innerHTML = `Olá ${nome}, seu IMC é ${imc} e você com obesidade grau I`;
    } else if (imc < 39.9) {
        result.innerHTML = `Olá ${nome}, seu IMC é ${imc} e você com obesidade grau II`;
    } else {
        result.innerHTML = `Olá ${nome}, seu IMC é ${imc} e você com obesidade grau III`;
    }

    var botao = document.getElementById("calcular");
    botao.innerHTML = "Calcular novamente";
    botao.addEventListener("click", () => {
        location.reload();
    })
}

