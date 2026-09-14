// Mapeamento dos elementos DOM via ID
const formLogin = document.querySelector('form');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

// Evento de submissão do formulário
formLogin.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos valores
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;

    // Exemplo de uso das variáveis
    console.log('Dados de Login:', { email, senha });

    // Exemplo: Validação básica ou chamada de API
    if (email && senha) {
        alert(`Tentando logar com: ${email}`);
        // Limpa os campos após o envio
        formLogin.reset();
    }
});