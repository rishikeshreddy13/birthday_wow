function checkCode() {
  const code = document.getElementById("codeInput").value.toUpperCase();

  const validCodes = ["HERO", "LEGEND", "KING", "ELITE"];

  if (validCodes.includes(code)) {
    showReveal();
  } else {
    showLocked();
  }
}

/* 🎉 SUCCESS */
function showReveal() {
  document.body.innerHTML = `
    <div class="card">
      <div class="title">
        THANK YOU <span class="heart">❤️</span>
      </div>
      <div id="text"></div>
    </div>
  `;

  const lines = [
    "Out of everyone…",
    "",
    "you actually took a moment to <span class='highlight'>wish me</span>.",
    "",
    "And honestly…",
    "that meant <span class='gradient-glow'>more than you think ❤️</span>",
    "",
    "Not everyone does that.",
    "",
    "But <span class='highlight'>you did 😄</span>",
    "",
    "So yeah…",
    "<span class='gradient-glow'>that didn’t go unnoticed.</span>"
  ];

  animateLines(lines, "text");
}

/* 🔒 LOCKED */
function showLocked() {
  document.body.innerHTML = `
    <div class="card">
      <h2 class="lock-title">🔒 Access Restricted</h2>
      <div id="lockText"></div>
    </div>
  `;

  const lines = [
    "This part isn’t available to everyone…",
    "",
    "Not yet 👀",
    "",
    "Come back later."
  ];

  animateLines(lines, "lockText");
}

/* ✨ ANIMATION ENGINE */
function animateLines(lines, targetId) {
  let i = 0;
  const box = document.getElementById(targetId);

  function show() {
    if (i < lines.length) {
      const div = document.createElement("div");
      div.className = "line";
      div.innerHTML = lines[i];

      box.appendChild(div);

      setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = "translateY(0)";
      }, 80);

      const delay = lines[i] === "" ? 400 : 900;

      i++;
      setTimeout(show, delay);
    }
  }

  show();
}