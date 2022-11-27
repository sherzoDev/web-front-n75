let $root = document.querySelector(".root");
let $select = document.createElement("select");

// let optionArray = ["Web Developer", "Android Developer", "IOS Developer", "Backend Developer"];

// optionArray.forEach((item) => {
//     let $option = document.createElement("option");
//     $option.innerHTML = item;
//     $option.value = item.split('')[0];
//     $select.append($option);
// });

// let users = [
//     {
//         name: "Akmal",
//         age: 21,
//         job: "Web Developer",
//         salary: 2000,
//         married: true,
//         address: {
//             country: "Uzbekistan",
//             state: "Tashkent",
//             ID: "UZ",
//         },
//     },
//     {
//         name: "Sanjar",
//         age: 32,
//         job: "Android Developer",
//         salary: 500,
//         married: false,
//         address: {
//             country: "Uzbekistan",
//             state: "Tashkent",
//             ID: "UZ",
//         },
//     },
//     {
//         name: "John",
//         age: 22,
//         job: "Web Developer",
//         salary: 1000,
//         married: false,
//         address: {
//             country: "Amerika",
//             state: "Washington",
//             ID: "US",
//         },
//     },
//     {
//         name: "Maksim",
//         age: 25,
//         job: "IOS Developer",
//         salary: 1200,
//         married: true,
//         address: {
//             country: "Russia",
//             state: "Moskow",
//             ID: "RU",
//         },
//     },
//     {
//         name: "Sergey",
//         age: 22,
//         job: "Web Developer",
//         salary: 1200,
//         married: false,
//         address: {
//             country: "Russia",
//             state: "Moskow",
//             ID: "RU",
//         },
//     },
//     {
//         name: "Boboqand",
//         age: 21,
//         job: "Web Developer",
//         salary: 900,
//         married: false,
//         address: {
//             country: "Uzbekistan",
//             state: "Tashkent",
//             ID: "UZ",
//         },
//     },
//     {
//         name: "Prataph",
//         age: 23,
//         job: "Android Developer",
//         salary: 2000,
//         married: true,
//         address: {
//             country: "India",
//             state: "Mumbay",
//             ID: "IN",
//         },
//     },
//     {
//         name: "Mike",
//         age: 31,
//         job: "Backend Developer",
//         salary: 3000,
//         married: true,
//         address: {
//             country: "Amerika",
//             state: "Washington",
//             ID: "US",
//         },
//     },
//     {
//         name: "Dilmurod",
//         age: 19,
//         job: "Web Developer",
//         salary: 1000,
//         married: true,
//         address: {
//             country: "Uzbekistan",
//             state: "Tashkent",
//             ID: "UZ",
//         },
//     },
//     {
//         name: "Dmitriy",
//         age: 33,
//         job: "Web Developer",
//         salary: 300,
//         married: true,
//         address: {
//             country: "Russia",
//             state: "Moskow",
//             ID: "RU",
//         },
//     },
// ]

// $select.addEventListener('change', e => {
//     e.preventDefault();
//     let html = ``;

//     users.filter((item) => item.job.includes(e.target.value)).forEach((item) => {
//         html += `
//         <div class="users_card">
//             <h3>${item.name}</h3>
//             <ul class="users_card_info">
//                 <li>
//                     Yoshi: ${item.age}
//                 </li>
//                 <li>
//                     Kasbi: ${item.job}
//                 </li>
//                 <li>
//                     Maoshi: ${item.salary}
//                 </li>
//                 <li>
//                     Oilaviy Holati: ${item.married}
//                 </li>
//                 <ul>
//                     <li>Davlat: ${item.address.country}</li>
//                     <li>Shahar: ${item.address.state}</li>
//                 </ul>
//             </ul>
//         </div>  
//         `
//     });

//     let htmlWrapper = `<div class="users">${html}</div>`
//     $root.innerHTML = htmlWrapper;
//     $root.prepend($select);
// });

// $root.prepend($select);

function renderUsers(array, element) {
    array.forEach(item => {
        html += `
        <div class="users_card">
            <h3>${item.name}</h3>
            <ul class="users_card_info">
                <li>
                    Yoshi: ${item.age}
                </li>
                <li>
                    Kasbi: ${item.job}
                </li>
                <li>
                    Maoshi: ${item.salary}
                </li>
                <li>
                    Oilaviy Holati: ${item.married}
                </li>
                <ul>
                    <li>Davlat: ${item.address.country}</li>
                    <li>Shahar: ${item.address.state}</li>
                </ul>
            </ul>
        </div>  
        `
    });
}

renderUsers(users, $root);