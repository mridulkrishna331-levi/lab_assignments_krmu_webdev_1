const quizQuestions = [
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },

{ question: "What language is primarily used for styling web pages?", answer: "css" },

{ question: "Which symbol is used for single-line comments in Python?", answer: "#" },

{ question: "What is the square root of 81?", answer: "9" },

{ question: "What is the chemical symbol for gold?", answer: "au" }
];


function runQuiz() {

    
    let score = 0;

    
    for (let i = 0; i < quizQuestions.length; i++) {

        
        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

        
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    
    alert(`Quiz Over! You scored ${score} out of ${quizQuestions.length}`);
}

runQuiz();