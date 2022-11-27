let $form = document.querySelector(".form");
let $root = document.querySelector(".root")
let $input = document.createElement("input");
$input.classList.add("form-control", "w-25", "mx-2", "input-js");
$input.placeholder = "Enter your movies name"
let $select = document.createElement("select");
let $option = document.createElement("option");
$select.classList.add("form-select");
let $btn = document.createElement("button");
$btn.classList.add("btn", "btn-success", "btn-js", "mx-2");
$btn.innerHTML = "Search";

let $optionArray = ['All', 'Action', 'Comedy', 'Fantasy', 'Adventure', 'Science Fiction', 'Thriller', 'Horror', 'Animation', 'Family', 'Documentary', ];

$optionArray.forEach((item) => {
  let $option = document.createElement("option");
  $option.innerHTML = item;
  $option.value = item.split("")[0];
  $select.append($option);
});

let html = ``;

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  films.forEach((item) => {
    html += `
    <div class="card mx-auto" style="width: 18rem;">
      <img src="${item.Poster}" class="card-img-top" alt="Downloading...">
      <div class="card-body">
        <h5 class="card-title">${item.Title}</h5>
        <p class="card-text">${item.overview}</p>
        <p class="card-text"><strong>${item.genres.join(", ")}</strong></p>
        <a href="${item.link}" target="_blank" class="btn btn-primary">See Film</a>
      </div>
    </div>
  `;
  });

  let $htmlWrapper = `<div class="users">${html}</div>`
  $root.innerHTML = $htmlWrapper;
});

$option.append($select);
$form.append($select);
$form.append($input);
$form.append($btn);

// contain() => {Bormi degani masalan shu divni ichida nimadir bormi degan ma'noda keladi}