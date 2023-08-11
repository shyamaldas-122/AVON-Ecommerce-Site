const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert("Message send");

    //html proper formaat to be sent in mail
    let ebody = `
    <h4>Name: </h4>${fname.value}&nbsp;${lname.value}
    <br>
    <h4>Email: </h4>${email.value}
    <br>
    <h4>Phone no: </h4>${phone.value}
    <br>
    <h4>Message: </h4>${message.value}
    <br>
    `;

    Email.send({
        SecureToken : "89a6fbe9-d293-45f8-aba4-c285ec35ea8f", //add your token here
        To : 'programming582@gmail.com', 
        From : "programming582@gmail.com",
        Subject : "Mail from: "+email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});