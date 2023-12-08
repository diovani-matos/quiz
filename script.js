const starButton = document.querySelector(".start-quiz");
const questionsContainer = document.querySelector(".questions-container");
const answersContainer = document.querySelector(".answers-container");
const questionText = document.querySelector(".question");
const nextQuestionButton = document.querySelector(".next-question");

let currentQuestionIndex = 0;
let totalCorrect = 0;


starButton.addEventListener("click", startGame);
nextQuestionButton.addEventListener("click", displayNextQuestion);



function startGame() {
  starButton.classList.add("hide");
  questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

function displayNextQuestion() {

  resetState();

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach((answer) => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}

// função para resetar a tela, esconder o botao proxima pergunta e cor de fundo, etc..

function resetState() {
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  nextQuestionButton.classList.add("hide");
}

// função para verificar opção escolhida pelo user, saber se está correta ou incorreta

function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++;
  } else {
    document.body.classList.add("incorrect");
  }

  document.querySelectorAll(".answer").forEach(button => {
      button.disabled = true;

    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
});

    nextQuestionButton.classList.remove("hide");
    currentQuestionIndex++;
}

// função para finalizar o quiz, mostrando o resultado do teste

function finishGame() {
  const totalQuestion = questions.length;
  const performance = Math.floor((totalCorrect * 100) / totalQuestion);

  let message = "";

  switch (true) {
    case performance >= 90:
      message = "Excelente!";
      break;
    case performance >= 70:
      message = "Muito Bom!";
      break;
    case performance >= 50:
      message = "Bom";
      break;
    default:
      message = "Pode melhorar!";
  }

  // para exibir uma mensagem na tela

  questionsContainer.innerHTML = `<p class='final-message'>Você acertou ${totalCorrect} de ${totalQuestion} questões!</p>
    <span>Resultado: ${message}</span>
    <button onclick=window.location.reload() class='button'>Refazer quiz</button>`;
}


const questions = [
    {
      question:
        "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
      answers: [
        { text: "push()", correct: true },
        { text: "addToEnd()", correct: false },
        { text: "append()", correct: false },
        { text: "insert()", correct: false },
      ],
    },
    {
      question:
        "Qual símbolo é usado para comentários de linha única em JavaScript?",
      answers: [
        { text: "/*", correct: false },
        { text: "#", correct: false },
        { text: "//", correct: true },
        { text: "--", correct: false },
      ],
    },
    {
      question:
        "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      answers: [
        { text: "toInt()", correct: false },
        { text: "parseInt()", correct: true },
        { text: "convertToInt()", correct: false },
        { text: "stringToNumber()", correct: false },
      ],
    },
    {
      question:
        "Em JavaScript, qual operador é usado para verificar igualdade estrita (valor e tipo)?",
      answers: [
        { text: "==", correct: false },
        { text: "&", correct: false },
        { text: "!==", correct: false },
        { text: "===", correct: true },
      ],
    },
    {
      question:
        "Como se referencia o primeiro elemento de um array em JavaScript?",
      answers: [
        { text: "array.first()", correct: false },
        { text: "array[0]", correct: true },
        { text: "array.start()", correct: false },
        { text: "array.get(1)", correct: false },
      ],
    },
    {
      question:
        "Qual método é usado para remover o último elemento de um array em JavaScript?",
      answers: [
        { text: "pop()", correct: true },
        { text: "removeLast()", correct: false },
        { text: "erase()", correct: false },
        { text: "cut()", correct: false },
      ],
    },
    {
      question: "Como se verifica o comprimento de uma string em JavaScript?",
      answers: [
        { text: "count()", correct: false },
        { text: "length()", correct: true },
        { text: "size()", correct: false },
        { text: "length", correct: false },
      ],
    },
    {
      question:
        "Qual operador lógico é usado para verificar se pelo menos uma das condições é verdadeira?",
      answers: [
        { text: "||", correct: true },
        { text: "&&", correct: false },
        { text: "!", correct: false },
        { text: ">=", correct: false },
      ],
    },
    {
      question:
        "Qual método é usado para remover um elemento de um array em uma posição específica em JavaScript?",
      answers: [
        { text: "cut()", correct: false },
        { text: "removeAt()", correct: false },
        { text: "extract()", correct: false },
        { text: "splice()", correct: true },
      ],
    },
    {
      question:
        "Qual função é usada para obter o tipo de uma variável em JavaScript?",
      answers: [
        { text: "getType()", correct: false },
        { text: "typeof()", correct: true },
        { text: "variableType()", correct: false },
        { text: "checkType()", correct: false },
      ],
    },
  ];