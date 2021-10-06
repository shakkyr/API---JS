let ques = 'https://opentdb.com/api.php?amount=3&category=18&type=multiple';

let theQuestion = document.querySelector('h2'),
    ans1 = document.querySelector('#answer1'),
    ans2 = document.querySelector('#answer2'),
    ans3 = document.querySelector('#answer3'),
    ans4 = document.querySelector('#answer4'),
    buttonAns = document.querySelectorAll('input'),
    score = document.querySelector('span');


async function quizFunc(){
    let arr = [];
    let question = await(await fetch(ques)).json();
    console.log(question);

    for (let i=0 ; i<3; i++){

        let objOfQuestion = {
            question :  question.results[i].question,
            answer1 :  question.results[i].correct_answer,
            answer2 :  question.results[i].incorrect_answers[0],
            answer3 :  question.results[i].incorrect_answers[1],
            answer4 :  question.results[i].incorrect_answers[2],
         }
        arr.push(objOfQuestion)
    }
    return arr;
}
let try1 =[];
async function priz (){
    try {
        try1 = await quizFunc()
        console.log(try1);
        setQuestion(0);
    }
    catch (err){
    console.log(err);}

}
priz()

    let currentQuestion = 0;
    let newScore = 0;

for ( button of buttonAns ){
    button.addEventListener('click', answerClick)


}
        function answerClick () {
            let index = +this.id.replace('answer', '')
            if ( index == 1){
            newScore ++
            score.innerHTML = newScore;
            }
            console.log("answerClick" + ' ' + index );
            currentQuestion++
            setQuestion(currentQuestion)
            

        }



    for (let i = 0 ; i<3 ; i++){
        // console.log(try1[i].question);
        // theQuestion.innerHTML =`this is q ${i+1} : ${try1[i].question}`;
        // ans1.value = try1[i].answer1;
        // ans2.value = try1[i].answer2;
        // ans3.value = try1[i].answer3;
        // ans4.value = try1[i].answer4;
        //  console.log(buttonAns);


        // buttonAns.addEventListener('click', ()=>{
        //     console.log(buttonAns.value)
        //     if (buttonAns.value == try1[i].answer1){
        //         score +=10
        //     }
        // })
    } 

    function setQuestion (index){
        console.log(try1[index].question);
        theQuestion.innerHTML =`this is q ${index+1} : ${try1[index].question}`;
        ans1.value = try1[index].answer1;
        ans2.value = try1[index].answer2;
        ans3.value = try1[index].answer3;
        ans4.value = try1[index].answer4;
         console.log(buttonAns);

    }
