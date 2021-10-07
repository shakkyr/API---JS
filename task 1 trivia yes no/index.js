let myLink = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean';

let h2 = document.querySelector('h2'),
    yes = document.querySelector('#true'),
    no = document.querySelector('#false'),
    score = document.querySelector('span');

let currentQuestion = 0;
let x = 0;
let ques = [];

async function myQuiz () {
    let myQues = [];
    let arr = await (await fetch(myLink)).json();
    for ( let i = 0; i<10 ; i++){
// console.log(arr.results[i].correct_answer);
        let obj ={
            question :arr.results[i].question,
            answer : arr.results[i].correct_answer

        }
        myQues.push(obj)

    }
    return myQues
}
// myQuiz()
async function ask (){
    
    try {
        ques = await myQuiz();
        console.log(ques);
        setQuestion(0)
    }
    catch (err){
        console.log(err);
    }

}
ask()



yes.addEventListener('click', ()=> {
    //console.log('ques[i].answer ' + ques[currentQuestion].answer);
    if ((ques[currentQuestion].answer) == "True"){
        x+= 10;
        score.innerHTML = x ;
        currentQuestion++;
        setQuestion(currentQuestion)
        
    }
})
no.addEventListener('click', ()=>{
    console.log('ques[i].answer ' + ques[currentQuestion].answer);
    if ((ques[currentQuestion].answer)  == "False"){
        x+= 10;
        score.innerHTML = x ;
        currentQuestion++;
        setQuestion(currentQuestion)
    
    }
})

function setQuestion() {

    if (currentQuestion < 9) {
        h2.innerHTML= (ques[currentQuestion].question)     
    }
   
}