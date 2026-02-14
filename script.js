const startButton = document.getElementById('start-btn');
 startButton.addEventListener('click', startGame);
const questionContainerElement = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('options');
let shuffleQuestions, currentQuestionIndex;
let userName = document.getElementById('name');
function startGame(){
    questionContainerElement.classList.remove('hide');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    userName.classList.add('hide');
    nextQuestion();
}
function nextQuestion(){
    showQuestion(shuffleQuestions[currentQuestionIndex]);
    nextButton.classList.remove('hide');
}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button).classList.add('btn');
    });
}
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if(isCorrect){
        document.body.classList.add('correct');
    }else{
        document.body.classList.add('wrong');
    }
}
let questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false}
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false}
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Oxygen", correct: true},
            {text: "Osmium", correct: false},
            {text: "Oganesson", correct: false}
        ]
    },
    {
        question:"What's the powerhouse of a cell?",
        answers: [
            {text: "Mitochondria", correct: true},
            {text: "ribosome",correct: false},
            {text: "nucleus", correct: false},
            {text: "RNA", correct: false}
        ]
    }
];