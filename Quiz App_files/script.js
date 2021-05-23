const quizData = [
    {
        questions: "How old is Eric",
        a: '28',
        b: '29',
        c: '30',
        d: '31',
        correct: 'D'
    },{
        questions: "What is his Nationality",
        a: 'Finnish',
        b: 'Indian',
        c: 'British',
        d: 'Bangladeshi',
        correct: 'd'

    },{
        questions: "Where he is living now?",
        a: 'Finland',
        b: 'England',
        c: 'Italy',
        d: 'Sweden',
        correct: 'a'
    },{
        questions: "In which city he is living now?",
        a: 'Helsinki',
        b: 'Espoo',
        c: 'Dhaka',
        d: 'Oulu',
        correct: 'b'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
