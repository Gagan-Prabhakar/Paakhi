const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "HO2"],
        answer: "H2O"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Bangkok", "Beijing"],
        answer: "Tokyo"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1918", "1923"],
        answer: "1912"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Sapphire"],
        answer: "Diamond"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    quizContainer.innerHTML = "";
    scoreDisplay.style.display = "none";
    nextButton.style.display = "none";

    const question = questions[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerText = question.question;
    quizContainer.appendChild(questionElement);

    const optionsElement = document.createElement("div");
    optionsElement.className = "options";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    quizContainer.appendChild(optionsElement);
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];

    if (selectedOption === question.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextButton.style.display = "block";
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.innerHTML = "";
    scoreDisplay.innerText = `You scored ${score} out of ${questions.length}`;
    scoreDisplay.style.display = "block";
}

nextButton.addEventListener("click", () => {
    loadQuestion();
});

loadQuestion();
