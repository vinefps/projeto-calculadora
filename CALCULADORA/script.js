var numeroAtual = '';
var lista = [];
var total = 0;
var totalMult = 1;
var operacao = '';  // variável para armazenar a operação atual: 'soma', 'sub' ou 'mult'

function atualizarTela(valor) {
    document.querySelector('.tela-calc').innerHTML = valor;
}

function realizarOperacao() {
    lista.push(parseInt(numeroAtual));
    switch (operacao) {
        case 'soma':
            for (let num of lista) {
                total += num;
            }
            atualizarTela(total);
            break;
        case 'sub':
            for (let i = 0; i < lista.length; i++) {
                if (i === 0) {
                    total = lista[i];
                } else {
                    total -= lista[i];
                }
            }
            atualizarTela(total);
            break;
        case 'mult':
            for (let num of lista) {
                totalMult *= num;
            }
            atualizarTela(totalMult);
            break;
    }
    lista = [];
    numeroAtual = '';
}

// Função para adicionar números à tela
function insert(e) {
    numeroAtual += e;
    atualizarTela(numeroAtual);
}

// Event listeners para operações
document.querySelector('.op-soma').addEventListener('click', () => {
    operacao = 'soma';
    lista.push(parseInt(numeroAtual));
    numeroAtual = '';
});

document.querySelector('.op-sub').addEventListener('click', () => {
    operacao = 'sub';
    lista.push(parseInt(numeroAtual));
    numeroAtual = '';
});

document.querySelector('.op-mult').addEventListener('click', () => {
    operacao = 'mult';
    lista.push(parseInt(numeroAtual));
    numeroAtual = '';
});

// Event listener para igual
document.querySelector('.igual').addEventListener('click', realizarOperacao);
