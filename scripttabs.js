
const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove "active" de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        // Adiciona "active" no botão clicado
        button.classList.add('active');

        // Remove "active" de todos os conteúdos
        contents.forEach(content => content.classList.remove('active'));
        // Adiciona "active" no conteúdo correspondente
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

