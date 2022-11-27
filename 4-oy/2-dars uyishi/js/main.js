let $red = document.querySelector(".red");
let $yellow = document.querySelector(".yellow");
let $green = document.querySelector(".green");
let $btn = document.querySelector(".btn");
let $title = document.querySelector(".title");

let rec = new webkitSpeechRecognition();


$btn.addEventListener("click", e => {
    rec.start()
    rec.lang = "Uz-uz"

    rec.onresult = e => {
        let result = e.results[0][0].transcript;
        $title.textContent = result;

        if (result === "qizil") {
            $red.style.backgroundColor = "red";
            $yellow.style.backgroundColor = "#fff";
            $green.style.backgroundColor = "#fff";

        } else if (result === "sariq") {
            $yellow.style.backgroundColor = "yellow"
            $red.style.backgroundColor = "#fff"
            $green.style.backgroundColor = "#fff";

        } else if (result === "yashil") {
            $green.style.backgroundColor = "green"
            $red.style.backgroundColor = "#fff"
            $yellow.style.backgroundColor = "#fff"
        }
    }
})