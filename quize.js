const quizData = [
  {
    question: "Should you share your password with friends?",
    options: ["Yes", "No"],
    correct: "No"
  },
  {
    question: "What should you do if you get a suspicious email?",
    options: ["Click it", "Delete or report it"],
    correct: "Delete or report it"
  }
];

let current = 0;
function loadQuiz() {
  const q = quizData[current];
  document.getElementById("question").textContent = q.question;
  document.getElementById("option1").textContent = q.options[0];
  document.getElementById("option2").textContent = q.options[1];
}

function checkAnswer(answer) {
  const feedback = document.getElementById("feedback");
  if (answer === quizData[current].correct) {
    feedback.textContent = "✅ Correct! Well done.";
  } else {
    feedback.textContent = "❌ Wrong! Be careful online.";
  }
}

document.addEventListener("DOMContentLoaded", loadQuiz);
