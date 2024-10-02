let forms = document.getElementById("contactForm");
let nom = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
const success_message = document.querySelector('.success');



let user_name = nom.value.trim();
let user_email = email.value.trim();
let user_phone =phone.value.trim();
let user_message =message.value.trim();



// verifier si l'email est valide 
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
// verifier le numerode telephone
function validatePhone(phoneNumber) {
    const regex = /^\+\d{1,3}\s?\d{3,}\s?\d{3,}\s?\d{3,}$/;
    return regex.test(phoneNumber);
}



// fonction de soumission des formulaires
const validateform = () =>{

    let user_name = nom.value.trim();
    let user_email = email.value.trim();
    let user_phone =phone.value.trim();
    let user_message =message.value.trim();


    let success_name = true;
    let success_email = true;
    let success_phone = true;
    let success_mess = true;

    let error_name = document.querySelector(".error_name");
    let error_email = document.querySelector(".error_email");
    let error_valid = document.querySelector(".error_valid");
    let error_phone = document.querySelector(".error_phone");
    let error_mess = document.querySelector(".error_mess");

    if(user_name === "" || user_name.length<4){
        error_name.style.display = 'block';
        error_name.style.color = 'red';
        success_name = false;
    }else{
        error_name.style.display = 'none';
        success_name = true;
    }
   
    if(user_message === "" || user_message.length<15){
        error_mess.style.display = 'block';
        error_mess.style.color = 'red';
        success_mess = false;
    }else{
        error_mess.style.display = 'none';
        success_mess = true;
    }

    if(user_phone === "" || !validatePhone(user_phone)){
        error_phone.style.display = 'block';
        error_phone.style.color = 'red';
        success_phone = false;
    }else{
        error_phone.style.display = 'none';
        success_phone = true;
    }
    if(user_email === ""){
        error_email.style.display = 'block';
        error_email.style.color = 'red';
        success_email = false;
    }else if(!validateEmail(user_email)){
        error_email.style.display = 'none';
        error_valid.style.display = 'block';
        error_valid.style.color = 'red';
        success_email = false;
    }else{
        error_email.style.display = 'none';
        error_valid.style.display = 'none';
        success_email = true;
    }

    if(!success_name || !success_email || !success_phone || !success_mess ){
    
    }else{
        contain_mail = `Full Name:${user_name} <br> Email:  ${user_email} <br> Phone:${user_phone} <br> Message:${user_message}`;
        forms.reset();
        sendEmail();
        
    }

}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "cybercorps237@gmail.com",
        Password : "69BCDB9D996087140BEEA8394D57632D8948",
        To : 'petitdassi7@gmail.com',
        From : 'cybercorps237@gmail.com',
        Subject : `CONTACT FROM PORTFOLIO`,
        Body : contain_mail
    }).then(
      message => {
        if(message =='OK'){
            swal({
                title: "Success",
                text: "Message Send successfully!",
                icon: "success",
                button: "OK",
              });
        }else{
            swal({
                title: "Oooops",
                text: "problem occur",
                icon: "danger",
                button: "Ok",
              });
        }
      }
        
      
    
    );
}

forms.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    validateform();

})







