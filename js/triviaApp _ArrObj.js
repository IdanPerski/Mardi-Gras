"use strict"


 let score = 0;
 let qustCounter = 0
 let questionDiv = document.getElementById("rowQuiz");
 const progresScore = document.getElementById('scoreBoard');
 const startBtn = document.getElementById('startBtn');
   
const questions = [
    {
        qst: "What language is  the words \'Mardi-Gras'\ origin ",
        answer1:["indian",0],
        answer2:["French",1],
        answer3:["Chinese",0],
        answer4:["Arabic",0],
       
      
    },

    {
        qst: "\'Mardi-Gras'\  means? ",
        answer1:["Fat Tuesday",1],
        answer2:["Big Celebration",0],
        answer3:["Happy Day",0],
        answer4:["Crazy pepole",0],
       

    },
    {
        qst: "From what year is the festival held",
        answer1:["1640",0],
        answer2:["1990",0],
        answer3:["1837",1],
        answer4:["2000",0],
     
    },
    {
        qst: "Mardi-Gras is also known as",
        answer1:["The Fat Day",0],
        answer2:["The Crazy Pepole Day",0],
        answer3:["Pancake Day",1],
        answer4:["Clowns Day",0], 
      
    },
    {
        qst: "The offical colors of Mardi Gras are:",
        answer1:["Purple,Gold and Green",1],
        answer2:["Blue , Red , White",0],
        answer3:["Green , Blue , Black",0],
        answer4:["Yellow , Orange, grey",0], 
      
    },
    {
        qst: "The official greeting of Mardi-Gras is:",
        answer1:["Have a Fat Day",0],
        answer2:["Let the good times roll",1],
        answer3:["Aloha",0],
        answer4:["Salam Alekum",0], 
    },
    {
        qst: "Choose the right sentence:",
        answer1:["It’s illegal to ride on a parade float without wearing a mask",1],
        answer2:["Mardi-Gras origens came from India",0],
        answer3:["Mardi Gras is celebrated only in New Orleans ",0],
        answer4:["Mardi Gras is related to Purim",0], 
     
    },
    {
        qst: "Acoording to Mardi-Gras tradition. Who is Rex? ",
        answer1:["The dog's Carnival",0],
        answer2:["The Dinosaur of Carnival",0],
        answer3:["The queen of Carnival ",0],
        answer4:["The king of Carnival",1], 
        
      
    },
    {
        qst: "What is the traditional dish at Mardi Gras?",
        answer1:["Banana",0],
        answer2:["King caka",1],
        answer3:["Napoleon Cake ",0],
        answer4:["Pizza",0], 
       
    },
    {
        qst: "Why everyone is hoping to get the slice of king cake with the baby inside?",
        answer1:["because it signals prosperity, luck, and fortune for the coming year",1],
        answer2:["because it signals eternal Life",0],
        answer3:["because it signals fertility ",0],
        answer4:["because it signals future Lottery wining",0], 
        
    },


      

]


 function showModal(){
     let gameOver =   document.getElementById('gameOver')  
     let myModal = new bootstrap.Modal(gameOver)
 myModal.show();

  
 }
   



 function addQuestion(){
     let  theScore = score*10;
console.log(theScore)
  
    let triviaPage = document.getElementById('triviaDiv');
       if(qustCounter === 10 && theScore < 90 ){
           triviaPage.style.display="none";
        
       }
     
     else if(theScore==90 ){
              showModal()
              theScore = 0
            }
       
else{  
   
 questionDiv.innerHTML=`
  <div class="col-sm-10 cl-md-6 col-lg-12 triviaImg  mx-auto p-5 cover-image${qustCounter} " id= "triviaDiv" style="transition:0.5s;" >
        <div class="questionDiv text-center m-4 shadow w-50  p-3 mx-auto" >
            
        <p class=" quizText "> ${questions[qustCounter].qst}</p>
               
        <li class="list-group list-group-horizontal d-flex flex-column align-items-center   ">

        <button class="myBtn px-2 m-3 p-auto"  value=${questions[qustCounter].answer1[1]} onclick='getValue(this)'> ${questions[qustCounter].answer1[0]}</button >

        <button class="myBtn px-2" value=${questions[qustCounter].answer2[1]} onclick='getValue(this)'>${questions[qustCounter].answer2[0]}</button> 

        <button class="myBtn px-2 m-3 p-auto"  value=${questions[qustCounter].answer3[1]} onclick='getValue(this)'> ${questions[qustCounter].answer3[0]}</button >

        <button class="myBtn px-2" value=${questions[qustCounter].answer4[1]} onclick='getValue(this)'>${questions[qustCounter].answer4[0]}</button> 
              
              </li>

            <div>
             

                </div>
         
         `  

     startBtn.style.display= "none";

   
}

 }




function getValue(element){ 
  score+= +element.value;
  qustCounter++;
    addQuestion()
     socreBoard()
   
}

 function socreBoard(){
 let  theScore = score*10;
    progresScore.ariaValueNow = theScore;
    progresScore.style.width = +theScore+"%";
    progresScore.innerText= +theScore   
    
 }

 /////////////// ///////////////



let  triviaWinner= {}
 let winnerArr = []
function input(key,keyValue){

    triviaWinner[key]=keyValue;
    return triviaWinner
   
}

 
function save() {   
  winnerArr.push(triviaWinner)
  triviaWinner = {}
 console.log(winnerArr)
  
}

 function validateTriviaForm() {
     let inputs = Array.from(document.getElementsByTagName('input'));
     let errorMsg = document.getElementById('TriviaErrorMsg');

 if(inputs[0].value ===  '' || inputs[1].value ===  '' ||inputs[2].value === ''  ) {
    errorMsg.innerText = '*Missing details, please fill up the form';   
 }

 else{
    errorMsg.style.cssText += ';background-color:green !important;'
    
    errorMsg.innerText= 'Your information has been received';
    save();
       
    setTimeout(function(){document.location= "../index.html"},3000)
    
 }

}


