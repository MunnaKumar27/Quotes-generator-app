const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");
const adviceNumberContainer = document.querySelector(".advice-number");
const adviceNumber = document.getElementById("number");
const loader = document.querySelector(".loader");

const loadAdvice = () => {
  // Hiding the content and showing the loader
  adviceNumberContainer.classList.add("hide");
  advice.classList.add("hide");
  loader.classList.remove("hide");

  const url = "https://api.adviceslip.com/advice";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      adviceNumber.textContent = data.slip.id;

      console.log(data);

      // Showing the results and hiding the content
      adviceNumberContainer.classList.remove("hide");
      advice.classList.remove("hide");
      loader.classList.add("hide");
    });
};

loadAdvice();

dice.addEventListener("click", loadAdvice);
