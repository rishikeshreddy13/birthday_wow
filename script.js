function checkCode() {
    const input = document.getElementById("codeInput");
    const code = input.value.toUpperCase().trim();

    const validCodes = ["HERO", "LEGEND", "KING", "ELITE"];

    if (validCodes.includes(code)) {
        showReveal();
    } else {
        showLocked();
    }
}

function showReveal() {
    const container = document.getElementById("main-container");
    container.innerHTML = `
        <div class="card">
            <div class="title">THANK YOU <span style="color: #ff4d6d">❤️</span></div>
            <div id="text"></div>
        </div>
    `;

    const lines = [
        "Out of everyone…",
        "you actually took a moment.",
        "And honestly…",
        "that meant <span class='gradient-glow'>more than you think</span>",
        "But <span class='highlight'>you did 😄</span>",
        "So yeah…",
        "<span class='gradient-glow'>it didn’t go unnoticed.</span>"
    ];

    animateLines(lines, "text");
}

function showLocked() {
    const container = document.getElementById("main-container");
    container.innerHTML = `
        <div class="card">
            <h2 class="title">🔒 Restricted</h2>
            <div id="lockText"></div>
            <button onclick="location.reload()" style="margin-top:20px; background:#475569">Try Again</button>
        </div>
    `;

    animateLines(["This isn't for you...", "Not yet 👀"], "lockText");
}

function animateLines(lines, targetId) {
    let i = 0;
    const box = document.getElementById(targetId);

    function show() {
        if (i < lines.length) {
            const div = document.createElement("div");
            div.className = "line";
            div.innerHTML = lines[i];
            box.appendChild(div);

            // Small timeout to trigger CSS transition
            setTimeout(() => {
                div.style.opacity = 1;
                div.style.transform = "translateY(0)";
            }, 50);

            i++;
            setTimeout(show, 1000);
        }
    }
    show();
}
