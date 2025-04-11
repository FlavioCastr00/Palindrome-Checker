const userInput = document.getElementById("text-input");
const botaoCheck = document.getElementById("check-btn");
const mensagemOutput = document.getElementById("result");
let str = "";

botaoCheck.addEventListener("click", MudarResulst);

function MudarResulst() {
    if (userInput.value === "") {
        alert("Please input a value");
        return;
    }
    else {
        str = LimparInput(userInput.value).toLowerCase();
        mensagemOutput.classList.remove('hidden');
        if (ChecarPalindromo(str)) {
            mensagemOutput.innerHTML = `${userInput.value} é um Palindromo!`;
        }
        else {
            mensagemOutput.innerHTML = `${userInput.value} não é um Palindromo!`;
        }
        return;
    }
}

function ChecarPalindromo(str) {
    let palavraReversa = "";
    for (let i = str.length - 1; i >= 0; i--) {
        palavraReversa += str[i];
    }

    return (str === palavraReversa);
}

function LimparInput(str) {
    const regex = /[_\s\.\,:\(\)\-\/\\]/g;
    return str.replace(regex, '');
}