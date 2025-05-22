// FAQ Dropdown: show/hide usando display
function setupFaqDropdown() {
    const questions = document.querySelectorAll('.faq-question');
    const answers = document.querySelectorAll('.faq-answer');
    questions.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            this.classList.toggle('active');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answers.forEach(a => a.style.display = 'none');
                answer.style.display = 'block';
            }
        });
    });
    answers.forEach(a => a.style.display = 'none');
}

if (document.querySelector('.faq-list')) {
    setupFaqDropdown();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();

            if (!nome || !email || !senha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            alert('Cadastro concluído com sucesso!');
            window.location.href = '../index.html';
        });
    }
});