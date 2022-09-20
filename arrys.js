// 배열
// let arr1 = [1, 10, '100', '광주', null];
// console.log(arr1)
// console.log(arr1[0])
// console.log(arr1[1])
// arr1[2] = '백';
// console.log(arr1);

const arr2 = new Array('1', null,100,50,'A');
arr2[1] = true;
// console.log(arr2);

// 배열의 메소드와 프로퍼티
// 배열명. (메소드나 프로퍼티명이 자동으로 추천됨)
console.log("배열 arr2의 길이 : " +arr2.length);
console.log(arr2.concat('/'));

const arr3 = ['가, 나, 다']
console.log("배열 arr2의 길이 : " +arr2.length);

console.log(arr2.concat(arr3));

console.log(arr2.join(' - '));

console.log(arr2.pop());

console.log(arr2);

console.log(arr2.push('C'));

console.log(arr2.shift());
console.log('shift된 arr2 : ' + arr2);
console.log(arr2.unshift());
console.log('unshift된 arr2 : ' + arr2);
//문자 x, 문자열 O

let myStr = '가나다라마바사아자차카타파하';
console.log(myStr[0]);
console.log(myStr.charAt(0));