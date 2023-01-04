// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    setResultado(`Seu IMC é: ${imc} - ${nivelImc}`, true);
});

function getNivelImc(imc) {
    const valor = imc < 18.5 ? 'Abaixo do peso' :
        imc < 24.9 ? 'Peso Normal ' :
            imc < 29.9 ? 'Sobrepeso' :
                imc < 34.9 ? 'Obesidade Grau 1' :
                    imc < 39.9 ? 'Obesidade Grau 2' : 'Obesidade Grau 3';

    console.log(valor);
    return valor;

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaParagrafo() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const paragrafo = criaParagrafo();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('paragrafo-dado-invalido');
    }

    paragrafo.innerHTML = msg;

    resultado.appendChild(paragrafo);
}
