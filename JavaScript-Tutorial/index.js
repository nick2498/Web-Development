// Array Methods
/*
let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("Harry");
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift("Nick");
console.log(myArr);
console.log(myArr.unshift(true));
console.log(myArr);
console.log(myArr.toString());
console.log(myArr.sort());
*/

// String Methods in JS
/*
let myString = "Today is a good good day";
console.log(myString.length);
console.log(myString.indexOf("day"));
console.log(myString.lastIndexOf("good"));
console.log(myString.slice(1, 4));
console.log(myString.replace("good", "very"));
*/

// Dates in JS
/*
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
*/

// DOM Manipulation in JS
/*
let elem = document.getElementById("click");
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[1].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

let tn = document.getElementsByTagName("div");
console.log(tn);

let createdElement = document.createElement("p");
createdElement.innerText = "This is a inner para";
tn[1].appendChild(createdElement);

let createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a inner bold";
tn[1].replaceChild(createdElement2, createdElement);

let qs = document.querySelector(".container");
console.log(qs);

let qsa = document.querySelectorAll(".container");
console.log(qsa);
*/
