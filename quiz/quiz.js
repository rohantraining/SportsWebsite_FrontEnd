//Question bank
var questionBank= [
    {
        question : 'Who is known as the God Of Cricket?',
        option : ['Sachin Tendulkar','Ricky Ponting','M.S.Dhoni','Kumar Sangakkara'],
        answer : 'Sachin Tendulkar'
    },
    {
        question : 'Which player has most grand slam victories at Roland Garros',
        option : ['Roger Federer, Switzerland','Marian Cilic, Croatia','Novak Djokovic, Serbia','Rafael Nadal, Spain'],
        answer : 'Rafael Nadal, Spain'
    },
    {
        question : 'Which football club won the UEFA Champions League in 2021-2022 season?',
        option : ['Liverpool','Chelsea','Real Madrid FC','Manchester United'],
        answer : 'Real Madrid FC'
    },
    {
        question : 'Who is the current mens world no 1. according to BWF Rankings?',
        option : ['Lakshya Sen','Kento Momota','Victor Axelson','Kidambi Srikanth'],
        answer : 'Victor Axelson'
    },
    {
        question : 'Who has the most Olympic goal medals in Table-Tennis history?',
        option : ['Harmit Desai','Sathiyan Gnanasekaran','Fan Zendong','Ma Long'],
        answer : 'Ma Long'
    },

    {
        question : 'Which is the governing body of Hockey in the world?',
        option : [' Hockey Federation of the World',' International Foundation of Hockey','International Hockey Federation','Hockey Organization of the World'],
        answer : 'International Hockey Federation'
    },

    {
        question : 'Which is the governing body Chess in the world?',
        option : ['World Chess Federation','World Chess Association','World Chess Foundation','Association of World Chess Champions'],
        answer : 'World Chess Federation'
    },

    {
        question : 'When was the English Premier League founded?',
        option : ['1983','1981','1982','1992'],
        answer : '1992'
    },

    {
        question : 'Which country will host the 2026 Asian Games?',
        option : ['Philippines','India','Japan','China'],
        answer : 'Japan'
    },

    {
        question : 'In which year, the first modern Olympic Games held??',
        option : ['1894','1892','1896','1890'],
        answer : '1892'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();