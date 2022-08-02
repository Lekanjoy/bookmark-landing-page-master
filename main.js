let navLinks = document.getElementById("nav");
let hamburgerMenu = document.getElementById("menu");
let logo = document.getElementById("logo");
let header = document.querySelector("header");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    hamburgerMenu.src = "/images/icon-close.svg";
    logo.src = "/images/logo2.svg";
  } else {
    hamburgerMenu.src = "/images/icon-hamburger.svg";
    logo.src = "/images/logo-bookmark.svg";
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
  tab1.style.display = "none";
  tab3.style.display = "none";
  tab2.style.display = "flex";
  speedy.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  speedy.style.color = " hsl(229, 31%, 21%)";

  simple.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
  easy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";

  simple.style.color = " hsl(229, 31%, 21% / 0.5)";
  easy.style.color = " hsl(229, 31%, 21% / 0.5)";
});

simple.addEventListener("click", () => {
  tab3.style.display = "none";
  tab2.style.display = "none";
  tab1.style.display = "flex";
  simple.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  simple.style.color = " hsl(229, 31%, 21%)";

  speedy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
  easy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";

  speedy.style.color = " hsl(229, 31%, 21% / 0.5)";
  easy.style.color = " hsl(229, 31%, 21% / 0.5)";
});

easy.addEventListener("click", () => {
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "flex";
  easy.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  easy.style.color = " hsl(229, 31%, 21%)";

  simple.style.borderBottom = "1px solid hsl(229, 8%, 60% )";
  speedy.style.borderBottom = "1px solid hsl(229, 8%, 60% )";

  simple.style.color = " hsl(229, 31%, 21% / 0.5)";
  speedy.style.color = " hsl(229, 31%, 21% / 0.5)";
});

// Form Validation

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  let emailField = myForm.querySelector("#email");
  let errorIcon = document.getElementById("errorIcon");
  let errorText = document.getElementById("errorText");

  const emailValue = emailField.value;
  const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailValue.match(regExp)) {
    emailField.style.border = "3px solid #27ae60";
  } else {
    errorIcon.style.display = "block";
    errorText.style.display = "block";
    emailField.style.border = "2px solid hsl(0, 94%, 66%)";

    //  Removing Error message after 5seconds
    setTimeout(() => {
      emailField.style.border = "none";
      errorIcon.style.display = "none";
      errorText.style.display = "none";
      //   location.reload();
    }, 5000);
  }
}
