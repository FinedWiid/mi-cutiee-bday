// Existing code...

// Function to trigger confetti animation
function startConfetti() {
  const duration = 5 * 1000; // 5 seconds
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Adding surprise button functionality
const surpriseButton = document.createElement('button');
surpriseButton.innerText = "Surprise!";
surpriseButton.onclick = startConfetti;
document.body.appendChild(surpriseButton);
