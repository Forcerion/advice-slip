const rerollBtn = document.querySelector("#reroll");
const stopIntervalBtn = document.querySelector("#pause");

let intervalId

function theChicken() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("citation-number").innerHTML = "ADVICE #" + data.slip.id;
      document.getElementById("citation").innerHTML = "“" + data.slip.advice + "“";
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

rerollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  theChicken();
});

stopIntervalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(intervalId);
  console.log("Interval stopped");
});


intervalId = setInterval(theChicken, 10000);
