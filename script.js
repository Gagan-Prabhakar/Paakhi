const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        paakhiDialogue: "Alright, let's warm up! What's the capital of France?"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        paakhiDialogue: "Next up! Can you tell me which planet is known as the Red Planet?"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
        paakhiDialogue: "Here's a tricky one! What is the largest ocean on Earth?"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare",
        paakhiDialogue: "Literature time! Who wrote 'Romeo and Juliet'?"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O",
        paakhiDialogue: "Let's test your science knowledge! What is the chemical symbol for water?"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan",
        paakhiDialogue: "Culture check! Which country is known as the Land of the Rising Sun?"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
        paakhiDialogue: "Math time! Can you tell me what is the smallest prime number?"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Gold", "Silver"],
        answer: "Oxygen",
        paakhiDialogue: "Let's breathe in some knowledge! Which element has the chemical symbol 'O'?"
    },
    {
        question: "What is the currency of the United States?",
        options: ["Dollar", "Euro", "Pound", "Yen"],
        answer: "Dollar",
        paakhiDialogue: "Finance question! What is the currency of the United States?"
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        options: ["Liver", "Lungs", "Heart", "Kidneys"],
        answer: "Heart",
        paakhiDialogue: "Health check! Which organ is responsible for pumping blood in the human body?"
    }
];

let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById("quiz");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    quizContainer.style.display = "block"; // Show quiz container
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
    
    // Paakhi asks the question
    setPaakhiDialogue(question.paakhiDialogue);
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];

    if (selectedOption === question.answer) {
        score++;
        setPaakhiDialogue("Great job! That's correct!"); // Positive feedback
    } else {
        setPaakhiDialogue(`Oops! The correct answer was "${question.answer}".`); // Incorrect feedback
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextButton.style.display = "block"; // Show next button
    } else {
        showScore(); // Show score when done
    }
}

function showScore() {
    quizContainer.innerHTML = "";
    scoreDisplay.innerText = `You scored ${score} out of ${questions.length}`;
    scoreDisplay.style.display = "block"; // Show score
    setPaakhiDialogue("Thanks for playing! I hope you had fun!"); // Ending message
}

// Handle next question button click
nextButton.addEventListener("click", () => {
    loadQuestion();
});
