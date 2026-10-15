const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let stage = 0;

function showFinalScreen() {
    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        color:white;
        background:#8B0000;
    ">
        <div style="font-size:120px;">🐻</div>

        <h1>❤️ LOVE YOU 3000 ❤️</h1>

        <h2>Girlfriend.</h2>

        <p>Officially, im joking been since 25'(saying it like its a decade ago, might aswell be).</p>

        <p style="font-size:2rem;">🐻❤️</p>
    </div>
    `;
}

noBtn.addEventListener("click", () => {

    stage++;

    if (stage === 1) {
        question.textContent = "Malaika, be serious.";
    }

    else if (stage === 2) {
        question.textContent = "Exe exe, jokes over.";
    }

    else if (stage === 3) {
        question.textContent = "Okay you've had your fun. Jokes over.";
        noBtn.textContent = "HELL YEAH";
    }

    else if (stage === 4) {
        question.textContent = "Stop playing games.";
        noBtn.textContent = "FREAK YEAH";
    }

    else {
        showFinalScreen();
    }
});

yesBtn.addEventListener("click", () => {

    if (stage < 4) {
        question.textContent = "Don't play games.";
    } else {
        showFinalScreen();
    }

});