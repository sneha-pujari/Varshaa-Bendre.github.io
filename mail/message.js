


// var fields = {}
// document.addEventListener("DOMContentLoaded", function() {
//     fields.name = document.getElementById('name');
//     fields.email = document.getElementById('email');
//     fields.subject = document.getElementById('subject');
//     fields.message = document.getElementById('message');
//     })

//    function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined' ) return false;
//     return (value.length > 0);
//    }

//    function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
//    }

//    function isValid() {
//     var valid = true;
    
//     valid &= fieldValidation(fields.name, isNotEmpty);
//     valid &= fieldValidation(fields.subject, isNotEmpty);
//     valid &= fieldValidation(fields.email, isEmail);
//     valid &= fieldValidation(fields.message, isNotEmpty);

//     return valid;
//    }

//    class User {
//     constructor(name, message, subject, email) {
//     this.name = name;
//     this.message = message;
//     this.subject = subject;
//     this.email = email;
//     }
//    }

//    function sendContact() {
//        if(isValid()){
//            let usr = new User(name.value, message.value, subject.value, email.value);
//            alert('message sent');
//        }
//        else {
//            alert("error")
//        }
//    }