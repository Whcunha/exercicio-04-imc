function calculoImc() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let imc = peso / (altura * altura)

    document.getElementById('resultado').textContent = "Seu indice de massa corporal é de " + parseInt(imc)

    if(imc <= 18.5) {
        document.getElementById('imc').textContent = "Você esta abaixo do peso"
    } else if (imc > 18 && imc <= 24.9) {
        document.getElementById('imc').textContent = "Parabéns, vocês esta no seu peso normal"
    } else if (imc > 24.9 && imc <= 34.9) {
        document.getElementById('imc').textContent = "Você esta com sobrepeso"
    } else if (imc > 34.9 && imc <= 39.9) {
        document.getElementById('imc').textContent = "Obsesidae grau I"
    } else {
         document.getElementById('imc').textContent = "Obesidade grau II ou maior";
    }

}