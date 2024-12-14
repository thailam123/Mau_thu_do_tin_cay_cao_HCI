// Get elements
const trigger = document.getElementById("trigger");
const floating = document.getElementById("floating");
const closeBtn = document.getElementById("close");

// Show the floating div on click
trigger.addEventListener("click", () => {
  floating.style.display = "block";
});

// Hide the floating div on close button click
closeBtn.addEventListener("click", () => {
  floating.style.display = "none";
});
