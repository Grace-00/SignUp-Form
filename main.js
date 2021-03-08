const button = document.querySelector(".btn");
const form = document.querySelector(".box-form");

const errorMessage = document.querySelectorAll(".error-message");

const input = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      errorMessage[i].style.display = "block";
      input[i].style.borderColor = "red";
      input[i].classList.add("error");
      input[i].style.marginTop = 0;
      button.style.marginTop = 0;
    }
  }
});
