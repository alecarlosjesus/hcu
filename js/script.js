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