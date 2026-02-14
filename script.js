startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);
questionContainerElement = document.getElementById('question-container')
userName = document.getElementById('name');
function startGame(){
    questionContainerElement.classList.remove('hide');
    startButton.classList.add('hide');
    userName.classList.add('hide');
    nextQuestion();
}
function nextQuestion(){

}

