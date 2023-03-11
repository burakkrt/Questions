export default function updatedStatisc() {
    if (JSON.parse(localStorage.getItem('questions'))) {
        let localQuestions = JSON.parse(localStorage.getItem('questions'));

        let correctAnswerCount = 0;
        let wrongAnswerCount = 0;

        localQuestions.map(question => {
            if (question.resultState == true) correctAnswerCount++;
            else if (question.resultState == false) wrongAnswerCount++;
        });

        let totalQuestions = localQuestions.length;
        let solvedCount = correctAnswerCount + wrongAnswerCount;
        let unsolvedCount = totalQuestions - solvedCount;

        if (document.getElementById('questionFilters')) {
            if (Number(document.getElementById('totalQuestion').textContent) !== totalQuestions) {
                document.getElementById('totalQuestion').textContent = totalQuestions;
            }
            if (Number(document.getElementById('totalCorrectAnswer').textContent) !== correctAnswerCount) {
                document.getElementById('totalCorrectAnswer').textContent = correctAnswerCount;
            }
            if (Number(document.getElementById('totalWrongAnswer').textContent) !== wrongAnswerCount) {
                document.getElementById('totalWrongAnswer').textContent = wrongAnswerCount;
            }
            if (Number(document.getElementById('totalSolved').textContent) !== solvedCount) {
                document.getElementById('totalSolved').textContent = solvedCount;
            }
            if (Number(document.getElementById('totalUnsolved').textContent) !== unsolvedCount) {
                document.getElementById('totalUnsolved').textContent = unsolvedCount;
            }
        }
    } else console.log('Error ! No questions found in local storage.');
}
