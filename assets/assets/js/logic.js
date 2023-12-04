let startButton = document.getElementById("start")
let questions = document.getElementById("questions")

startButton.addEventListener("click", start)

function startQuiz() {
console.log("quiz started")
startButton.classList.add("hide")
questions.classList.remove("hide")
nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}