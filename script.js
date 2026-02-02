function nextSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  // Show the target section
  document.getElementById(sectionId).classList.add("active");
}

function yesClick() {
  nextSection("success");
}

function noClick() {
  const noBtn = document.getElementById("noBtn");
  // Random position within the viewport
  const randomX = Math.random() * (window.innerWidth - 150);
  const randomY = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
