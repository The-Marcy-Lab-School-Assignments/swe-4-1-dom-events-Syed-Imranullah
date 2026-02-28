let count = 0;

const countHeading = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
  count++;
  countHeading.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countHeading.textContent = count;
})