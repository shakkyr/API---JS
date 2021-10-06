let myLink = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean';

let h2 = document.querySelector('h2'),
    yes = document.querySelector('#true'),
    no = document.querySelector('#false'),
    score = document.querySelector('span');

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
    let ques ;
    try {
        ques = await myQuiz();
        console.log(ques);
    }
    catch (err){
    console.log(err);
    }
//    h2
//    yes
//    no
for (let i = 0 ; i<10; i++){
    let x = 0;
    h2.innerHTML= (ques[i].question)
    yes.addEventListener('click', ()=> {
        if ((ques[i].answer) == "True"){
            x+= 10;
            score.innerHTML = x ;
            
        }
    })
    no.addEventListener('click', ()=>{
        if ((ques[i].answer)  == "False"){
            x+= 10;
            score.innerHTML = x ;
           
        }
    })

   console.log(ques[i].answer);
}




}
ask()