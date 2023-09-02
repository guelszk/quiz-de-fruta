const quizData = [
    {
      question: "Qual é a fruta mais consumida no mundo?",
      choices: ["Banana", "Maçã", "Laranja", "Manga"],
      correctAnswer: 0
    },
    {
      question: "Qual destas frutas é nativa da América do Sul?",
      choices: ["Abacaxi", "Mamão", "Uva", "Kiwi"],
      correctAnswer: 3
    },
    {
      question: "Qual destas frutas é rica em vitamina C?",
      choices: ["Morango", "Pêssego", "Limão", "Melancia"],
      correctAnswer: 2
    }
  ];
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit-btn");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    choicesElement.innerHTML = "";
  
    currentQuizData.choices.forEach(function (choice, index) {
      const li = document.createElement("li");
      li.textContent = choice;
      li.onclick = function () {
        checkAnswer(index);
      };
      choicesElement.appendChild(li);
    });
  }
  
  function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
  }
  
  loadQuestion();
s  