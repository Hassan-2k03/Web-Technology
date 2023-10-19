const {isEmail,isLowercase} = pkg;
import pkg from 'validator';

var email = 'abc@gmail.com';
console.log(isEmail(email));
console.log(isLowercase(email));