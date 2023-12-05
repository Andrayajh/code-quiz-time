let startButton = document.getElementById("start")
let questions = document.getElementById("questions")

let shuffleQuestions, presentQuesionsIndex

let questionElement = document.getElementById("questions")
let choicesElement = document.getElementById("choices") 

startButton.addEventListener("click", start)



function startQuiz() {
startButton.classList.add("hide")
shuffleQuestions = questions.sort(() => Math.random() - .5)
presentQuesionIndex = 0
questions.classList.remove("hide")
nextQuestion()
}

function nextQuestion() {
    resetQuiz()
showQuestion(shuffleQuestions[presentQuesionsIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answer.forEach(answer => {
    const button = document.createElement("button")
    button.classList.add("button")
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonElement.appendChild(button)
});
}

function resetQuiz() {
    nextButton.classList.add("hide")

}
function selectAnswer() {

}