  const questions = [
      {
        question: "1) What is the capital of France?",
        answers: ["(a) Rome", "(b) Berlin", "(c) Madrid", "(d) Paris"],
        correct: 3
      },
      {
        question: "2) Which language runs in a web browser?",
        answers: ["(a) Python", "(b) Java", "(c) C++", "(d) JavaScript"],
        correct: 3
      },
      {
        question: "3) What does CPU stand for?",
        answers: ["(a) Central Processing Unit", "(b) Computer Power Unit", "(c) Central Program Utility", "(d) Control Processing Unit"],
        correct: 0
      },
      {
        question: "4) Which planet is known as the Red Planet?",
        answers: ["(a) Earth", "(b) Jupiter", "(c) Mars", "(d) Venus"],
        correct: 2
      }
    ];

    const questionElement = document.querySelector(".Question");
    const answerButtons = document.querySelectorAll(".btn");
    const nextButton = document.querySelector(".Next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
      answerButtons.forEach((btn, index) => {
        btn.innerText = currentQuestion.answers[index];
        btn.classList.remove("correct", "wrong");
        btn.disabled =false;
        btn.onclick = () => checkAnswer(index);
      });
    }

    function checkAnswer(selectedIndex) {
      const correctIndex = questions[currentQuestionIndex].correct;
      if (selectedIndex === correctIndex) {
        answerButtons[selectedIndex].classList.add("correct");
        score++;
      } else {
        answerButtons[selectedIndex].classList.add("wrong");
        answerButtons[correctIndex].classList.add("correct");
      }

      answerButtons.forEach(btn => btn.disabled = true);
      nextButton.style.display = "inline-block";
    }

    nextButton.addEventListener("click", () => {
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          loadQuestion();
          nextButton.style.display = "none";
          nextButton.disabled = false;
        } else {
          showScore();
        }
      }, 0.5);
    });

    function showScore() {
      questionElement.innerText = `Quiz Completed! You scored ${score} out of ${questions.length}`;
      document.querySelector(".Answer-btns").innerHTML = "";
      nextButton.style.display = "none";
    }

    loadQuestion();
       