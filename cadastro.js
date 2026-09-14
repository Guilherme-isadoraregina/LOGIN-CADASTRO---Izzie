// Mapeamento dos elementos DOM via ID
const formCadastro = document.querySelector('form');
const inputNome = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

// Evento de submissão do formulário
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos valores
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;

    // Exemplo de uso das variáveis
    console.log('Dados de Cadastro:', { nome, email, senha });

    // Exemplo: Validação de tamanho mínimo de senha
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    alert(`Usuário ${nome} cadastrado com sucesso!`);
    formCadastro.reset();
});