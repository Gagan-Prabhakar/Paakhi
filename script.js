// Quiz questions array with dialogues for each step
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        paakhiDialogue: "Let's warm up with an easy one! What's the capital of France?"
    },
    // Additional questions
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const paakhiDialogue = document.getElementById("paakhi-dialogue");
const nextButton = document.getElementById("next-question");
const progressBarFill = document.getElementById("progress-bar-fill");

document.getElementById("quiz-btn").addEventListener("click", startQuiz);

function startQuiz() {
    document.querySelector('.options').style.display = 'none'; // Hide initial options
    quizContainer.style.display = 'block'; // Show quiz container
    showMessage("Great choice! Let's play the quiz!"); // Introduction message
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${question.question}</p>`;

    const options = document.createElement("div");
    options.className = "options";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option, button));
        options.appendChild(button);
    });

    questionContainer.appendChild(options);
    showMessage(question.paakhiDialogue);

    updateProgressBar();
}

function checkAnswer(selectedOption, button) {
    const question = questions[currentQuestionIndex];

    if (selectedOption === question.answer) {
        showMessage("Good choice! That's correct!");
        score++;
    } else {
        showMessage(`Oops! The correct answer was "${question.answer}".`);
    }

    disableOptions();
    currentQuestionIndex++;
    nextButton.style.display = "inline-block"; // Show Next button
}

function disableOptions() {
    const optionButtons = document.querySelectorAll(".options button");
    optionButtons.forEach(button => button.disabled = true);
}

function showMessage(message) {
    paakhiDialogue.innerText = message;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
    nextButton.style.display = "none";
});

function showFinalScore() {
    questionContainer.innerHTML = `<h2>Quiz Completed! Your score is ${score} out of ${questions.length}.</h2>`;
    showMessage("Thank you for playing! Hope you enjoyed it!");
    nextButton.style.display = "none";
    progressBarFill.style.width = "100%";
}
