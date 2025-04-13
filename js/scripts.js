document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const questions = document.querySelectorAll('.quiz-question');
    
    questions.forEach(question => {
        const answer = question.querySelector('input[type="radio"]:checked');
        if (answer && answer.value === 'yes') {
            score++;
        }
    });
    
    const result = document.getElementById('quiz-result');
    if (score >= 4) {
        result.textContent = 'Based on your answers, it is recommended that you seek professional help.';
    } else {
        result.textContent = 'Based on your answers, you may not need professional help at this time. However, if you have any concerns, please consult a professional.';
    }
});