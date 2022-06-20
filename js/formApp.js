

'use strict'

let user= {}

let clientsArr = []

let index = 0;

let formFilled = document.getElementById('formFilled');

function input(key,keyValue){

    user[key]=keyValue;
    return user
   
}

 
function save() {
    
  clientsArr.push(user)

  user = {}

  formSent();
 console.log(clientsArr)
  
}



function formSent () {
   let formModal =   document.getElementById('formModal')
 let myModal = new bootstrap.Modal(formModal)
 myModal.show();}


const errorMsg = document.getElementById('message');
const EmailErrorMsg = document.getElementById('emailInvalid');
const inputs = Array.from(document.getElementsByTagName('input'));

inputs[0] = firstName;
inputs[1] = lastName;
inputs[2] = email;


function validateForm() {
 

 if(firstName.value ===  '' || lastName.value ===  '' ||email.value === '' || textArea.value === ''  ) {
    errorMsg.innerText = '*missing details, please fill up the form'   
 }
 
 else{
     save()
       errorMsg.innerText = ''
    
 }

}


///////////// VALIDATION ///////////////////


//TODO: email regex

// let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 


// console.log(emailRegex)


// function emailValidation (){
//    if(email.value === emailRegex) {

//  EmailErrorMsg.innerText = '*email adress must contain @ character'   
//  }
// }






///////////code by zeev///////////
/////////////////// user DIDN'T WORK////////////////

// const validations = {
//   email: function(value) {
//     return value.indexOf('@') > -1;
//   }
// }


// function input(key,keyValue){

//     user[key]=keyValue;

//     // if (validations[key]) {
//       if (!validations[key](keyValue)) {
//         alert(`Invalid value for ${key}`);
//       }
      
//     // }

//     return user
   
// }

