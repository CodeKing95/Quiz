let timeLeft = document.querySelector(".time-left");

let quizContainer = document.getElementById("container");

let nextBtn = document.getElementById("next-button");

let countOfQuestion = document.querySelector(".number-of-question");

let displayContainer = document.getElementById("display-container");

let scoreContainer = document.querySelector("score-container");

let restart = document.getElementById("restart");

let userScore = document.getElementById("user-score");

let startScreen = document.querySelector(".start-screen");

let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
  {
    id: "0",
    question: "HTML stands for ______?",
    options: [
      "HigText Machine Language",
      "HyperText and link Markup Language",
      "HyperText Markup Language",
      "None of these",
    ],
    correct: "HyperText Markup Language",
  },
  {
    id: "1",
    question: "What is CSS Used for?",
    options: [
      "To style & layout web pages",
      "To play viedo games",
      "It is used for programming",
      "None of these",
    ],
    correct: "To style & layout web pages",
  },
  {
    id: "2",
    question: "CSS stands for ______?",
    options: [
      "Cascading Style Scheet",
      "Computer Can Sit",
      "Computer Can Spin",
      "None of these",
    ],
    correct: "Cascading Style Scheet",
  },
  {
    id: "3",
    question: "Which language is used for HTML & CSS ______?",
    options: ["JavaScript", "PHP", "BASIC", "None of these"],
    correct: "JavaScript",
  },
  {
    id: "4",
    question: "Which is not an Internet Protocol ______?",
    options: ["IP", "STP", "FTP", "HTTP"],
    correct: "STP",
  },
  {
    id: "5",
    question:
      "Which of the following element is responsible for making the text bold in HTML?",
    options: ["br", "b", "a", "pre"],
    correct: "b",
  },
  {
    id: "6",
    question:
      "Which of the following tag is used for inserting the largest heading in HTML",
    options: ["h6", "h3", "h5", "h1"],
    correct: "h1",
  },
  {
    id: "7",
    question: "Who founded JavaScript?",
    options: ["Bill Gates", "Steve Jobs", "Brendan Eich", "Mark Zuckerberg"],
    correct: "Brendan Eich",
  },
  {
    id: "8",
    question: "What year was JavaScript founded?",
    options: ["1992", "1993", "1994", "1995"],
    correct: "1995",
  },
  {
    id: "9",
    question: "Which is the most popular languge in 2025?",
    options: ["JavaScript", "Java", "Python", "C#"],
    correct: "JavaScript",
  },
];

restart.addEventListener("click", () => {
  Initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Your Score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");

  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    let qustion_DIV = document.createElement("p");
    qustion_DIV.classList.add("question");
    qustion_DIV.innerHTML = i.question;
    div.appendChild(qustion_DIV);

    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">
        ${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">
        ${i.options[1]}</button>
     <button class="option-div" onclick="checker(this)">
        ${i.options[2]}</button>
     <button class="option-div" onclick="checker(this)">
        ${i.options[3]}</button>
        `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

function Initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  Initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
