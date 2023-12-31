const correctAnswers = ['D', 'D', 'C', 'B', 'B', 'A', 'C', 'B', 'D', 'D', 'C', 'B', 'D', 'C', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const submit = document.querySelector('input#submit');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value];

    // CHECK ANSWERS

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10 ;
        }
    });

    // SHOW RESULT ON PAGE
    scrollTo(0,0);

    result.style.display ="block";
    submit.style.display ="none";

    
    

    let output = 0;
    const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}marks`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 20);

    const correctionone = document.querySelector('.answer1');
    const correctiontwo = document.querySelector('.answer2');
    const correctionthree = document.querySelector('.answer3');
    const correctionfour = document.querySelector('.answer4');
    const correctionfive = document.querySelector('.answer5');
    const correctionsix = document.querySelector('.answer6');
    const correctionseven = document.querySelector('.answer7');
    const correctioneight = document.querySelector('.answer8');
    const correctionnine = document.querySelector('.answer9');
    const correctionten = document.querySelector('.answer10');
    const correctioneleven = document.querySelector('.answer11');
    const correctiontwelve = document.querySelector('.answer12');
    const correctionthirteen = document.querySelector('.answer13');
    const correctionfourteen = document.querySelector('.answer14');
    const correctionfifteen = document.querySelector('.answer15');
    
    
    correctionone.style.display ="block";
    correctiontwo.style.display ="block";
    correctionthree.style.display ="block";
    correctionfour.style.display ="block";
    correctionfive.style.display ="block";
    correctionsix.style.display ="block";
    correctionseven.style.display ="block";
    correctioneight.style.display ="block";
    correctionnine.style.display ="block";
    correctionten.style.display ="block";
    correctioneleven.style.display ="block";
    correctiontwelve.style.display ="block";
    correctionthirteen.style.display ="block";
    correctionfourteen.style.display ="block";
    correctionfifteen.style.display ="block";
});
