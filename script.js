// Simple helper for selecting elements
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function burstConfetti(intensity = 80) {
  if (typeof confetti !== "function") return;

  const colors = ["#ffb3e6", "#ff5fa8", "#b5e4ff", "#4fa9ff", "#ffffff"];

  confetti({
    particleCount: intensity,
    spread: 70,
    origin: { y: 0.3 },
    scalar: 1.1,
    ticks: 200,
    colors,
  });
}

function gentleConfettiStream(durationMs = 1600) {
  if (typeof confetti !== "function") return;

  const end = Date.now() + durationMs;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 45,
      origin: { x: 0 },
      colors: ["#ffb3e6", "#ffd6f2", "#b5e4ff"],
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 45,
      origin: { x: 1 },
      colors: ["#ffb3e6", "#ffd6f2", "#b5e4ff"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function attachSmoothScroll() {
  $$("button[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll");
      if (!target) return;
      const el = document.querySelector(target);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupLetterToggle() {
  const more = $("#letterMore");
  const toggle = $("#toggleLetter");
  if (!more || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = more.classList.toggle("is-open");
    toggle.textContent = isOpen
      ? "Hide the rest 💗"
      : "Read the rest of the letter ✨";
  });
}

function setupWishes() {
  const wishText = $("#wishText");
  const btn = $("#newWish");
  if (!wishText || !btn) return;

  const wishes = [
    "May every morning feel soft and safe, the way it does when you’re wrapped in my arms, knowing that you are endlessly loved.",
    "I wish your heart could see itself the way I see it: brave, gentle, hilarious, and made of the prettiest shades of pink and blue.",
    "May all your quiet dreams start gently coming true this year, one by one, until you suddenly realize how far you’ve come.",
    "I hope you never forget that even on the hardest days, you are still the girl I’d choose in every universe, every lifetime, every timeline.",
    "May you always have someone to hold your hand, listen to your rants, and remind you how magical and important you are — especially me.",
    "I wish your days ahead are filled with unexpected little joys: your favorite songs at the perfect moment, soft blankets, and people who truly see you.",
    "May your reflection always remind you: you are not just beautiful, you are breathtaking, inside and out.",
    "I hope this year gives you new reasons to be proud of yourself — and that you actually pause to celebrate how incredible you are.",
  ];

  let lastIndex = -1;

  btn.addEventListener("click", () => {
    let index = Math.floor(Math.random() * wishes.length);
    if (index === lastIndex && wishes.length > 1) {
      index = (index + 1) % wishes.length;
    }
    lastIndex = index;

    wishText.textContent = wishes[index];
    gentleConfettiStream(1200);
  });
}

function setupSurprisePanel() {
  const open = $("#openSurprise");
  const close = $("#closeSurprise");
  const panel = $("#surprisePanel");
  const moreConfetti = $("#moreConfetti");
  if (!panel) return;

  const openPanel = () => {
    panel.classList.remove("hidden");
    panel.setAttribute("aria-hidden", "false");
    burstConfetti(140);
    setTimeout(() => gentleConfettiStream(1800), 200);
  };

  const closePanel = () => {
    panel.classList.add("hidden");
    panel.setAttribute("aria-hidden", "true");
  };

  open?.addEventListener("click", openPanel);
  close?.addEventListener("click", closePanel);

  panel.addEventListener("click", (event) => {
    if (event.target === panel) closePanel();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.classList.contains("hidden")) {
      closePanel();
    }
  });

  moreConfetti?.addEventListener("click", () => {
    burstConfetti(180);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachSmoothScroll();
  setupLetterToggle();
  setupWishes();
  setupSurprisePanel();
});
