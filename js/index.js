'use strict';

const numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {

    case (numOrStr === null):
        alert('ви скасували');
        break;

    case (numOrStr?.trim() === ''):
        alert('Empty String');
        break;

    case (isNaN(+numOrStr)):
        alert(' number is Ba_NaN');
        break;

    default:
        console.log('OK!');
}