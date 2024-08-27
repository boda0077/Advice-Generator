const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");
const adviceNum = document.querySelector(".adviceNum");

const fetching = async () => {
  try {
    advice.textContent = "Loading...."
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });
    const data = await response.json();
    advice.textContent = `"${data.slip.advice}"`;
    adviceNum.textContent = "advice#" + data.slip.id;
  } catch (error) {
    adviceNum.textContent = "";
    advice.textContent ="Something is Wrong please Try again later"
  }

  
};
dice.addEventListener("click", fetching);
