

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
  myModal.show();
}


const errorMsg = document.getElementById('message');
const EmailErrorMsg = document.getElementById('emailInvalid');
const inputs = Array.from(document.getElementsByTagName('input'));

inputs[0] = firstName;
inputs[1] = lastName;
inputs[2] = email;


function validateForm() {
  if(firstName.value ===  '' || lastName.value ===  '' ||textArea.value === '' ){
      errorMsg.innerText = '*missing details, please fill up the form'   
  }
  else
  if(email.value === '' ||email.value.indexOf('@') == -1 ){
    errorMsg.innerText = '*Email address invalid';
    email.focus();
  }
  
  else{
      save()
      errorMsg.innerText = ''
      
  }

}



