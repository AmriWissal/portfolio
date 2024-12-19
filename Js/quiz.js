const questions = [
    {
        question: "Quelle est la capitale de la Tunisie ?",
        answers: [
            "Tunis",
            "Sousse",
            "Sfax"
        ],
        correct: 0
    },
    {
        question: "Quel site antique tunisien est classé au patrimoine mondial de l'UNESCO ?",
        answers: [
            "Carthage",
            "Kairouan",
            "Les deux"
        ],
        correct: 2
    },
    {
        question: "Quel plat traditionnel tunisien est à base de semoule et de pois chiches ?",
        answers: [
            "Couscous",
            "Lablabi",
            "Brik"
        ],
        correct: 0
    },
    {
        question: "Quelle est la monnaie utilisée en Tunisie ?",
        answers: [
            "Le Dinar tunisien",
            "L'Euro",
            "Le Dirham"
        ],
        correct: 0
    },
    {
        question: "Quelle boisson chaude est un symbole de l'hospitalité tunisienne ?",
        answers: [
            "Le thé vert",
            "Le thé à la menthe",
            "Le café tunisien"
        ],
        correct: 1
    },
    {
        question: "Quel est le plus grand lac salé de Tunisie ?",
        answers: [
            "Lac Ichkeul",
            "Chott el-Jérid",
            "Lac de Tunis"
        ],
        correct: 1
    },
    {
        question: "Dans quelle ville se trouve la Grande Mosquée OKBA BEN NAFAA ?",
        answers: [
            "Tunis",
            "Sfax",
            "Kairouan"
        ],
        correct: 2
    },
    {
        question: "Quel site tunisien a servi de décor au film Star Wars ?",
        answers: [
            "Matmata",
            "Tataouine",
            "Les deux"
        ],
        correct: 2
    },
    {
        question: "Quel est le plat tunisien traditionnel servi principalement pendant le Ramadan ?",
        answers: [
            "Tajine",
            "Chorba",
            "Rechta"
        ],
        correct: 1
    },
    {
        question: "Quel est le plus grand gouvernorat de Tunisie ?",
        answers: [
            "Tunis",
            "Tatouine",
            "Sfax"
        ],
        correct: 1
    }
];

const quiz = document.querySelector('#quiz');
const scoreMessage = document.querySelector('#score');
let correctAnswers = 0;
let selectedAnswers = Array(questions.length).fill(null);

// Check if scoreMessage is found
if (!scoreMessage) {
    console.error('Error: #score element not found in the DOM');
}

if (!quiz) {
    console.error('Error: #quiz element not found in the DOM');
}

// Render the questions and answers dynamically
questions.forEach((item, index) => {
    const quizItem = document.createElement('div');
    quizItem.className = 'quiz-item';

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = item.question;
    quizItem.appendChild(questionTitle);

    const answerList = document.createElement('dl');
    item.answers.forEach((answer, idx) => {
        const option = document.createElement('dt');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${index}`;
        radio.value = idx;

        radio.addEventListener('change', () => {
            selectedAnswers[index] = parseInt(radio.value);
            checkAnswersFilled();  // Check if all answers are filled
        });

        const label = document.createElement('span');
        label.textContent = answer;

        option.appendChild(radio);
        option.appendChild(label);
        answerList.appendChild(option);
    });

    quizItem.appendChild(answerList);
    quiz.appendChild(quizItem);
});

// Create and add the finish button
const finishButton = document.createElement('button');
finishButton.textContent = 'Terminer le quiz';
finishButton.style.marginTop = '20px';
finishButton.disabled = true; 

finishButton.addEventListener('click', () => {

    const allAnswered = selectedAnswers.every(answer => answer !== null);

    if (allAnswered) {

        correctAnswers = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                correctAnswers++;
            }
        });

            if (correctAnswers <= 5) {
                scoreMessage.style.color = 'red';
            } else {
                scoreMessage.style.color = 'green';    
            }



        if (scoreMessage) {
            scoreMessage.style.visibility = 'visible';
            scoreMessage.textContent = `Votre score est : ${correctAnswers} / ${questions.length}`;
        }


        window.scrollTo({ top: 0, behavior: 'smooth' });

    } else {

        if (scoreMessage) {
            scoreMessage.style.visibility = 'visible';
            scoreMessage.textContent = 'Veuillez remplir toutes les questions avant de terminer.';
        }
    }


    const quizItems = document.querySelectorAll('.quiz-item');
    quizItems.forEach(item => {
        item.style.filter = 'blur(8px)';
    });


    finishButton.disabled = true;
});


const checkAnswersFilled = () => {
    const allAnswered = selectedAnswers.every(answer => answer !== null); 
    finishButton.disabled = !allAnswered;
};


quiz.appendChild(finishButton);