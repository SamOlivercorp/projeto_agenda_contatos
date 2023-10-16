const form = document.getElementById('agenda-contatos');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (nomes.includes(inputNome.value)) {
        alert (`O contato de: ${inputNome.value} já foi inserido`)
    } else {
        nomes.push(inputNome.value);
    numeros.push(parseFloat(inputNumeroTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    }

    inputNome.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
