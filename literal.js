let myName="홍길동";
let yourName = new String("김길동");
console.log(myName, yourName)
let myScore = 100;
console.log(typeof myName, typeof yourName);
let yourScore = new Number(70);
console.log(myScore, yourScore);
console.log(typeof myScore, typeof yourScore);
let myArr = [10, 20, 30];
let youArr = new Array(10, 20, 30);
console.log(myArr, yourArr);
console.log(typeof myArr, typeof yourArr);

let myObj = {
    name: "박찬재",
    gender: "남",
    liveIn : "북구"
}

let yourObj = new Object({
    name: "홍길동",
    gender: "남성",
    born: "전남"
})
console.log(myObj.name, myObje['gender']);
console.log(yourObj.Name, youObj['born']);

let isOk = true;
let isNo = false;

