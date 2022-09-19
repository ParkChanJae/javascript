"use strict";
let a = 5;      //number
console.log("a의 자료형 : " +typeof a)
let b = 5.0;    //number
console.log('b의 자료형 : ' +typeof b)

let c = "test"; //string
console.log('c의 자료형 : ${typeof c}')
let d = 't';    //string

let e = false;  //boolean

let f = null;   //NULL

let g;          //Undefined(변수는 선언했지만, 값을 대입할당하지 않은 상태)
console.log('g의 자료형 : ' +typeof g)
let h = [1,2,3]; //Array

let i = {name: 'seon', job: 'tutor'}

let j = function() {
    console.log('hello javascript world!');
}

let k = 100;
console.log(k);
