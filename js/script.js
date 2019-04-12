const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const mensagem = document.querySelector('#mensagem');
const botao = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.preventDefault()
    if (nome.value === undefined ||
        nome.value === null ||
        nome.value === '' ||
        nome.value.trim().length < 0) {
        nome.focus();
        alert('Preencha o campo nome');
        return false;
    }
    else if (email.value === undefined ||
        email.value === null ||
        email.value === '' ||
        email.value.trim().length < 0) {
        email.focus();
        alert('Por favor, informe um email válido');
        return false;
    }
    else if (telefone.value === undefined ||
        telefone.value === null ||
        telefone.value === '' ||
        telefone.value.trim().length < 0) {
        telefone.focus();
        alert('Por favor, informe um número de telefone válido');
        return false;
    }
    else if (mensagem.value === undefined ||
        mensagem.value === null ||
        mensagem.value === '' ||
        mensagem.value.trim().length < 11) {
        mensagem.focus();
        alert('Não esqueça de deixar uma mensagem para mim!');
        return false;
    }
    document.querySelector('form').submit();
    alert('Mensagem enviada com sucesso!');
});