let navLinks = document.getElementById("nav");
let hamburgerMenu = document.getElementById("menu");
let logo = document.getElementById("logo");
let header = document.querySelector("header");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    hamburgerMenu.src = "/images/icon-close.svg";
    logo.src = "/images/logo2.svg";
    // header.style.position = 'fixed'
  } else {
    hamburgerMenu.src = "/images/icon-hamburger.svg";
    logo.src = "/images/logo-bookmark.svg";

    // header.style.position = "relative";
  }
});

// FAQ Expand Section
let answer = document.querySelectorAll(".answer");
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", () => {
    answer[i].classList.toggle("expand");

    if (answer[i].classList.contains("expand")) {
      arrow[i].src = "/images/icon-arrow-up.svg";
      arrow[i].style.transform = "rotate(180deg)";
    } else {
      arrow[i].src = "/images/icon-arrow.svg";
      arrow[i].style.transform = "rotate(0deg)";
    }
  });
}

//  Reveal Tabs Section

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

const revealTabs = document.querySelectorAll(".revealTabs");
const tabs = document.querySelectorAll(".tabs");

const simple = document.getElementById("simple");
const speedy = document.getElementById("speedy");
const easy = document.getElementById("easy");

// for (let i = 0; i < tabs.length; i++) {

//     tabs[i].addEventListener('click', (e) => {
//         let individualItem = e.target;

//         if (!e.currentTarget) {
//         individualItem.style.borderBottom = "none";

//         } else {
//         individualItem.style.borderBottom = "3px solid gray";

//         }

//     })

// };

speedy.addEventListener("click", () => {
  console.log("Clicked");
  tab1.style.display = "none";
  tab3.style.display = "none";
  tab2.style.display = "flex";
  speedy.style.borderBottom = "3px solid red";

  simple.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
  easy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
});

simple.addEventListener("click", () => {
  console.log("Clicked");
  tab3.style.display = "none";
  tab2.style.display = "none";
  tab1.style.display = "flex";
  simple.style.borderBottom = "3px solid red";

  speedy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
  easy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
});

easy.addEventListener("click", () => {
  console.log("Clicked");
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "flex";
  easy.style.borderBottom = "3px solid red";

  simple.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
  speedy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
});

// Form Validation

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  let emailField = myForm.querySelector("#email");
  let errorIcon = document.getElementById("errorIcon");
  let errorText = document.getElementById("errorText");

  let emailValue = emailField.value;
  const format = `${emailValue} @.com`

  if(!emailValue.match(format)){
    errorIcon.style.display = 'block';
    errorText.style.display = "block";
  }
}
