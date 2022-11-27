const accardion = document.querySelector(".accardion");


const arr = [{
        accTitle: "List 1",
        accText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto. Quam qui possimus odit accusamus vero! Impedit reiciendis laboriosam assumenda, soluta similique est tenetur nihil delectus qui dolor ea mollitia!"
    },
    {
        accTitle: "List 2",
        accText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto. Quam qui possimus odit accusamus vero! Impedit reiciendis laboriosam assumenda, soluta similique est tenetur nihil delectus qui dolor ea mollitia!"
    },
    {
        accTitle: "List 3",
        accText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto. Quam qui possimus odit accusamus vero! Impedit reiciendis laboriosam assumenda, soluta similique est tenetur nihil delectus qui dolor ea mollitia!"
    },
];


const forLoopFnc = function () {
    for (let i = 0; i < arr.length; i++) {

        const accardionBtn = document.createElement("button");

        const accardionText = document.createElement("p");

        accardionText.classList.add('para-con');

        accardionBtn.innerHTML = arr[i].accTitle;

        accardionText.innerHTML = arr[i].accText;

        accardionBtn.addEventListener('click', function () {
            accardionText.classList.add('para-not');
        });


        accardionBtn.append(accardionText);
        accardion.append(accardionBtn);
    };
};


forLoopFnc();



let date = new Date().getDate()

console.log(date);