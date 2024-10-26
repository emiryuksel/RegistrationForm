const form = document.getElementById('form');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const alertMessage = document.querySelector('.alertMessage');
const alertTitle = document.getElementById('alertTitle');


let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity()
    console.log(isValid);
    if(!isValid){
        alertTitle.textContent='Please fill in all fields!'
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        return;
    }

    if(password.value === repassword.value){
        passwordMatch=true;
        password.style.borderColor = 'rgb(5, 168, 5)';
        repassword.style.borderColor = 'rgb(5, 168, 5)';
    }
    else{
        passwordMatch = false;
        alertTitle.textContent = 'The passwords do not match.'
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        password.style.borderColor = 'red';
        repassword.style.borderColor = 'red';
        return;
    }
    if(isValid && passwordMatch){
        alertTitle.textContent='Registered!'
        alertTitle.style.color = 'rgb(5, 168, 5)';
        alertMessage.style.borderColor = 'rgb(5, 168, 5)';
    }
}


function takeFormInformation(){
    const user = {
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        address:form.address.value
    }

    console.log(user);
}


function submitForm(e) {
    e.preventDefault();
    validateForm();


    if(isValid && passwordMatch)
    {
        takeFormInformation()
        form.reset(); 
    }
}

form.addEventListener('submit', submitForm)
