let form = document.querySelector(".form");
let int1 = document.querySelector(".int1");
let int2 = document.querySelector(".int2");
let int3 = document.querySelector(".int3");
let btn = document.querySelector(".btn");

let currentYear = 2022;
let currentDay = 21;
let currentMonth = 11;

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     let intVal = int.value;
//     let intArr = intVal.split("-");

//     for (let i = 0; i < intArr.length; i++) {
//         const element = intArr[i];
//         console.log(element);
//     }

// })



form.addEventListener('submit', function (e) {

    e.preventDefault();

    let yearCC = currentYear - int1;
    let monthCC = currentMonth - int2;
    let dayCC = currentDay - int3;

    console.log(Number(yearCC));
    console.log(Number(monthCC));
    console.log(Number(dayCC));

})