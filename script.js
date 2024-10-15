const questions = [
  {
    question: "Câu hỏi 1: Thủ đô của Việt Nam là?",
    answers: {
      a: "Hà Nội",
      b: "Hồ Chí Minh",
      c: "Đà Nẵng",
      d: "Nha Trang",
    },
    correct: "a",
  },
  {
    question: "Câu hỏi 2: Ai là tác giả của tác phẩm 'Truyện Kiều'?",
    answers: {
      a: "Nguyễn Du",
      b: "Tô Hoài",
      c: "Nam Cao",
      d: "Xuân Diệu",
    },
    correct: "a",
  },
];

function loadQuestions() {
  const quizQuestions = document.getElementById("quiz-questions");
  questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
            <p>${q.question}</p>
            ${Object.keys(q.answers)
              .map(
                (answer) => `
                <label>
                    <input type="radio" name="question${index}" value="${answer}">
                    ${q.answers[answer]}
                </label>
            `
              )
              .join("")}
        `;
    quizQuestions.appendChild(questionElement);
  });
}

function calculateResult(event) {
  event.preventDefault();
  let score = 0;
  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === q.correct) {
      score++;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu.`;
}

document
  .getElementById("quiz-form")
  .addEventListener("submit", calculateResult);
loadQuestions();
