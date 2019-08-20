const logo = document.querySelector("#logo");
logo.innerText = "YO!";

const heading = document.createElement("h1");
heading.innerHTML = "<span>Hello</span>" + document.URL;
document.body.appendChild(heading);
