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
  // Start a short heart shower when the success screen appears
  startHearts(3500);
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

// Create a heart rain: spawn hearts for `duration` milliseconds
function startHearts(duration = 3000) {
  const container = document.getElementById("hearts");
  if (!container) return;

  const spawnInterval = 120;
  const end = Date.now() + duration;

  const intervalId = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(intervalId);
      return;
    }
    spawnHeart(container);
  }, spawnInterval);

  // spawn a few immediately for instant effect
  for (let i = 0; i < 5; i++) spawnHeart(container);
}

function spawnHeart(container) {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Randomize size and starting position
  const size = Math.floor(Math.random() * 28) + 16; // 16-44px
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  const left = Math.random() * 100; // vw
  heart.style.left = left + "vw";

  // Random animation duration and delay for variety
  const duration = Math.random() * 3 + 3.5; // 3.5s - 6.5s
  heart.style.animation = `fall ${duration}s linear forwards`;

  container.appendChild(heart);

  // Remove after animation completes
  setTimeout(() => {
    heart.remove();
  }, (duration + 0.5) * 1000);
}
