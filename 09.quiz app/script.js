class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionindex = 0;
  }
  getquestionindex() {
    return this.questions[this.questionindex];
  }
  guess(answer) {
    if (this.getquestionindex().iscorrectanswer(answer)) {
      this.score++;
    }
    this.questionindex++;
  }
}
class question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  iscorrectanswer(choice) {
    return this.answer === choice;
  }
}

//DISPLAY QUESTION
function displayquestion() {
  if (quiz.length === 5) {
    showscores();
  } else {
    //show question
    let questionelement = document.getElementById("question");
    questionelement.innerHTML = Quiz.getquestionindex().text;

    // show options
    let choices = Quiz.getquestionindex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceelement = document.getElementById("choice" + i);
      choiceelement.textContent = choices[i];
      guess("btn" + i, choices[i]);
    }
    showprogress();
  }
}

// GUESS FUNCTION
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayquestion();
  };
}

//show quiz progress
function showprogress() {
  let currentquestionnumber = quiz.questionindex + 1;
  let progresselement = document.getElementById("progress");
  progresselement.textContent = `Question ${currentquestionnumber} of ${quiz.questions.length}`;
}

//SHOW SCORE
function showscores() {
  let quizendhtml = `
    <h1> Quiz completed </h1>
    <h2 id = "score"> You scored : ${quiz.score} of ${quiz.questions.length} </h2>
    <div class = "quiz-repeat"> <a href = "index.html"> Take test again </div>
    `;
  let quizelement = document.querySelector(".quiz");
  quizelement.innerHTML = quizendhtml;
}

// CREATE QUIZ QUESTIONS
let questions = [
  new question(
    "my name is ?",
    ["praveen", "kumar", "pv", "praveen kumar v"],
    "praveen kumar v"
  ),
  new question(
    "my name is ?",
    ["praveen", "kumar", "pv", "praveen kumar v"],
    "praveen kumar v"
  ),
  new question(
    "my name is ?",
    ["praveen", "kumar", "pv", "praveen kumar v"],
    "praveen kumar v"
  ),
  new question(
    "my name is ?",
    ["praveen", "kumar", "pv", "praveen kumar v"],
    "praveen kumar v"
  ),
  new question(
    "my name is ?",
    ["praveen", "kumar", "pv", "praveen kumar v"],
    "praveen kumar v"
  ),
];

let quiz = new Quiz(questions);

//display question
displayquestion();
