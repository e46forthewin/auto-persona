// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "Q1/12: You're taking a Dodge Caravan carpoool on your way back home. It's been a loooong day, what are you thinking about?",
        image: "images/Q1.gif",
        answers: {
            F: {
                text: "I'm just so tired and can't wait to drive my Prelude. Why does everyday feel the same...",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Should I rest or work first when I get home? Most importantly, is the R34 better than the Mk4 Supra?",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q2/12: You look outside the windows, seems like you're abt to drag race a Civic with a laptop. Suddenly everything turns into darkness!!",
        image: "images/Q2.gif",
        answers: {
            J: {
                text: "VAMOSSSS!!! *Pull out your phone to record a video*",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "*Turn around to see the other's reaction* Should I ask the driver what's going on?",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "Q3/12: Before you can do anything, the Caravan stops and everything around you floats up!",
        image: "images/Q3.gif",
        answers: {
            S: {
                text: "Ok this is weird, am I dreaming? *pinch your arm*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Is this a prank? Am I winning?!",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q4/12: Amidst the surprise, your eyes catch something drifting past the window.",
        image: "images/Q4.gif",
        answers: {
            F: {
                text: "Woahhh...so many Miatas! How cute!! I wanna give them a hug!",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Miatas? In space? That's kinda odd... How do they survive out there?!",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q5/12: 'Welcome Aboard!' a small Isetta appears and annouces, 'We will reach our destination in 5 months 6 days and 2 hours!'",
        image: "images/Q5.gif",
        answers: {
            P: {
                text: "Cool! A space cruise?! Where are we going? Do I get a racesuit? This is so exciting!",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "Hey uh...Am I in space? How did I get here? When can I go home?! Why..",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "Q6/12: The robot just points to the back of the Dodge which now looks more like inside of a spaceship! What do you want to see first?",
        image: "images/Q6.gif",
        answers: {
            I: {
                text: "997 GT3 RS. I want to take pictures with it.",
                scores: { I: 0, E: +1 },
            },
            E: {
                text: "Una Lucid Sapphire para mi por favor.",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "Q7/12: On the way back to your seat, you are surrounded by Tesla Cybertrucks! 'Unauthorized passenger detected, CAPTURE CAPTURE!'",
        image: "images/Q7.gif",
        answers: {
            S: {
                text: "Woah! What do you mean unauthorized? I'm the passenger of this cruise!",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "Ok, I have no idea what's going on. How about we calm down and chat for a bit?",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q8/12: Suddenly, the S2000 glides in, it whispers something to the E39 M5 that makes it stop.",
        image: "images/Q8.gif",
        answers: {
            E: {
                text: "Bob!! Thank you! You come to save me, right?",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "HA! That's right! Back off, E39! Am I safe to go now?!",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q9/12: The Cybertruck is already a giant vacuum cleaner, the E39 uses it to point at you!",
        image: "images/Q9.gif",
        answers: {
            J: {
                text: "Throw your coat at them as distraction, run towards the big blue 'VOLVO' sign!",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Run in random direction, confuse them, blend in with the white Tesla Model 3s!",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q10/12: You run past the gift shop. Looks like you got rid of them. It wouldn't hurt to get some souvenirs, right?",
        image: "images/Q10.gif",
        answers: {
            F: {
                text: "Get the Camry, let's head home in one piece",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Get the E60 M5",
                scores: { F: 0, T: +1 },
            },
        },

    },
    {
        question: "Q11/12: The Dodge Viper SRT-10 suddenly emerges in front of you! You're sucked into its intake manifold!!!",
        image: "images/Q11.gif",
        answers: {
            S: {
                text: "It's ok, this is just a dream! I'll wake up soon! *close your eyes and give up*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "There's enough room here, it's a frickin 8.4L monster. I be chillin",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q12/12: After a moment of darkness, you find yourself back in the Dodge Caravan. 'Are you alright?' the HR asks",
        image: "images/Q12.gif",
        answers: {
            I: {
                text: "Woah! I thought BMW actually made the G80/G82 pigs... Nevermind! I'm alright now, I guess? *panic in silence*",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "You won't believe it...I think I just had the wildest dream ever! *tell him about Lucid stock hitting USD 1000*",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "When you look up again, the Gravity is the highest selling vehicle in the US of A. You glance outside the window, darkness creeps in as the bus enters another tunnel...",
        image: "images/Q13.gif",
        answers: {
            K: {
                text: "Wait...was that Isetta?",
            },
            U: {
                text: "Oh no...Do I have to go through this again?",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "1DE.jpg",
    },
    "ISFJ": {
        image: "2light.jpg"
    },
    "INFJ": {
        image: "3UFO.jpg"
    },
    "INTJ": {
        image: "4nebula.jpg"
    },
    "ISTP": {
        image: "5comet.jpg"
    },
    "ISFP": {
        image: "6ST.jpg"
    },
    "INFP": {
        image: "7DM.jpg"
    },
    "INTP": {
        image: "8met.jpg"
    },
    "ESTP": {
        image: "9BH.jpg"
    },
    "ESFP": {
        image: "10Sn.jpg"
    },
    "ENFP": {
        image: "11Grav.jpg"
    },
    "ENTP": {
        image: "12hand.jpg"
    },
    "ESTJ": {
        image: "13sat.jpg"
    },
    "ESFJ": {
        image: "14sun.jpg"
    },
    "ENFJ": {
        image: "15gal.jpg"
    },
    "ENTJ": {
        image: "16rocket.jpg"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


