const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let timerInterval;

function startQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
    });
}

function selectAnswer(answerIndex) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (answerIndex === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById("timer").textContent = timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("final-score").textContent = score;

    // Hide timer
    document.getElementById("timer-container").style.display = "none";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timer = 30;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("timer-container").style.display = "block";
    startQuiz();
}

// Initialize the quiz when the page loads
startQuiz();
