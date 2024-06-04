const questions = [
    {
        question:"What is Captain America's shield made of?",
        answers: [
            { text: "Adamantium", correct: false},
            { text: "Vibranium", correct: true},
            { text: "Carbonadium", correct: false},
            { text: "Promethium", correct: false},
 
        ]
    },
    {
        question:"Who is Black Panther's sister?",
        answers: [
            { text: "Shuri", correct: true},
            { text: "Okoye", correct: false},
            { text: "Nakia", correct: false},
            { text: "Ramonda", correct: false},
 
        ]
    },
    {
        question:" Nick Fury wears an eye patch over which eye? ",
        answers: [
            { text: "Right eye", correct: false},
            { text: "Left eye", correct: true},
        ]
    },
    {
        question:"What's Agent Coulson's first name?",
        answers: [
            { text: "Paul", correct: false},
            { text: "Phil", correct: true},
            { text: "Colin", correct: false},
            { text: "Alan", correct: false},
 
        ]
    },
    {
        question:"Hawkeye has how many children?",
        answers: [
            { text: "Two", correct: false},
            { text: "Five", correct: false},
            { text: "Three", correct: true},
            { text: "One", correct: false},
 
        ]
    },
    {
        question:"Pepper Potts is allergic to what?",
        answers: [
            { text: "Strawberries", correct: true},
            { text: "Banana", correct: false},
        ]  
    },
    {
        question:"On what planet was the Soul Stone in Infinity War?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Vormir", correct: true},
            { text: "Titan", correct: false},
            { text: "Knowhere", correct: false},
 
        ] 
    },
    {
        question:"Which Stone dose Vision have?",
        answers: [
            { text: "The Time Stone", correct: false},
            { text: "The Soul Stone", correct: false},
            { text: "The Mind Stone", correct: true},
            { text: "The Power Stone", correct: false},
 
        ]    
    },
    {
        question:"What type of doctor is Stephen Strange?",
        answers: [
            { text: "Cardiothoracic surgeon", correct: false},
            { text: "Trauma surgeon", correct: false},
            { text: "Plastic surgeon", correct: false},
            { text: "Neurosurgeon", correct: true},
 
        ]
    },
    {
        question:"Which hero is considered as The first Avenger?",
        answers: [
            { text: "Thor", correct: false},
            { text: "Iron Man", correct: false},
            { text: "Captain America", correct: true},
            { text: "Spider-Man", correct: false},
 
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();