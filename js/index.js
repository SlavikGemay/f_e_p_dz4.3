'use strict';

const numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {

    case (null):
        alert('ви скасували');
        break;

    case (''):
        alert('Empty String');
        break;

    case (isNaN(+numOrStr)):          // чогось это не работает
        alert(' number is Ba_NaN');
        break;

    default:
       alert('OK!')
}