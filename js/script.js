// Espera que o DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário de login
    const form = document.getElementById('loginForm');
  
    // Adiciona um ouvinte de evento para o evento de envio do formulário
    form.addEventListener('submit', function (event) {
      // Impede o envio padrão do formulário
      event.preventDefault();
  
      // Captura os valores dos campos de email e senha
      const email = document.getElementById('exampleInputEmail1').value;
      const password = document.getElementById('exampleInputPassword1').value;
  
      // Verifica se os campos estão vazios
      if (email.trim() === '' || password.trim() === '') {
        // Se estiverem vazios, exibe um alerta
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
      // Por exemplo, usando AJAX
      // Após enviar os dados, você pode fazer outras ações, como redirecionar o usuário ou exibir uma mensagem de sucesso
      // Se desejar, pode usar a função fetch() ou qualquer outra biblioteca de AJAX para fazer a solicitação ao servidor
    });
  });
  