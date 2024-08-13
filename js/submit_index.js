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


forms.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    validateform();

    //sendEmail();

})




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


    if(user_name === "" || user_name.length<4){
        set_error(nom1,nom2);
        success_name = false;
    }else{
        set_success(nom1,nom2);
        success_name = true;
    }
   
    if(user_message === "" || user_message.length<10){
        set_error(message1,message2);
        success_mess = false;
    }else{
        set_success(message1,message2);
        success_mess = true;
    }

    if(user_phone === "" || !validatePhone(user_phone)){
        set_error(phone1,phone2);
        success_phone = false;
    }else{
        set_success(phone1,phone2);
        success_phone = true;
    }
    if(user_email === "" || !validateEmail(user_email)){
        set_error(email1,email2);
        success_email = false;
    }else{
        set_success(email1,email2);
        success_email = true;
    }

    if(!success_name && !success_email && !success_phone && !success_mess ){
        success_message.style.display="block";
    }else{
        contain_mail = `${user_name} <br> ${user_email} <br> ${user_phone} <br> ${user_message}`;
    }

}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "cybercorps237@gmail.com",
        Password : "69BCDB9D996087140BEEA8394D57632D8948",
        To : 'petitdassi7@gmail.com',
        From : 'cybercorps237@gmail.com',
        Subject : "Contact from Portfolio",
        Body : contain_mail
    }).then(
      message => {
        if(message =='OK'){
            alert('message Send!')
        }else{
            alert("Problem Occur!!!")
        }
      }
        
      
    
    );
}









