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
  // Create a wrapper that will sway left/right while heart falls within it
  const wrap = document.createElement("div");
  wrap.className = "heart-wrap";

  const heart = document.createElement("div");
  heart.className = "heart";

  // Randomize size
  const size = Math.floor(Math.random() * 28) + 16; // 16-44px
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Random horizontal start (using vw for viewport-relative placement)
  const left = Math.random() * 100; // vw
  wrap.style.left = left + "vw";

  // Random animation durations for variety
  const fallDuration = Math.random() * 3 + 3.5; // 3.5s - 6.5s
  const swayDuration = Math.random() * 1.8 + 2.8; // 2.8s - 4.6s

  heart.style.animation = `fall ${fallDuration}s linear forwards`;
  wrap.style.animation = `sway ${swayDuration}s ease-in-out infinite`;

  wrap.appendChild(heart);
  container.appendChild(wrap);

  // Remove wrapper after the fall animation completes
  setTimeout(() => {
    wrap.remove();
  }, (fallDuration + 0.5) * 1000);
}
