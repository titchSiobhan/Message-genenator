let messages1 = [
    "Sprits fortune the sleepy,",
    "The stars align for you,",
    "A great opportunity is coming your way,",
    "Embrace the unknown,",
    "We seek the truth,",
    "Hear the voices."
];

let messages2 = [
  "the past is loud.",
  "echoes of the past linger.",
  "history has its eyes on you.",
  "the future is unwritten.",
  "the cats are watching.",
  "mysteries abound."
];

let messages3 = [
    "Silly goose!",
    "They're behind you!",
    "You're amazing!",
    "If you're sure...",
    "So it is foretold",
    "The prophecy speaks of it",
    "Quick, run!"
];

// Removed unused messages array


function generateMessage() {
    // Randomly select one message from each array and concatenate them
    const msg1 = messages1[Math.floor(Math.random() * messages1.length)];
    const msg2 = messages2[Math.floor(Math.random() * messages2.length)];
    const msg3 = messages3[Math.floor(Math.random() * messages3.length)];
    return `${msg1} ${msg2} ${msg3}`;
}

document.getElementById("generateMessageButton").addEventListener("click", function() {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#f9effcff";
    popup.style.padding = "20px";
    popup.style.border = "2px solid #333";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    popup.style.zIndex = "1000";
    popup.textContent = generateMessage();

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.style.marginTop = "10px";
    closeBtn.onclick = function() {
        document.body.removeChild(popup);
    };

    popup.appendChild(document.createElement("br"));
    popup.appendChild(closeBtn);

    document.body.appendChild(popup);
});

function addPhrase() {
    const phraseInput = document.getElementById("phraseInput");
    const newPhrase = phraseInput.value.trim();
    if (newPhrase) {
        // Add new phrase to messages3 by default (or choose another array as needed)
        messages3.push(newPhrase);
        phraseInput.value = '';
        let feedback = document.querySelector("#feedback");
        if (feedback) {
            feedback.textContent = "Phrase added!";
            setTimeout(() => { feedback.textContent = ""; }, 1500);
        }
    } else {
        let feedback = document.querySelector("#feedback");
        if (!feedback) {
            feedback = document.createElement("div");
            feedback.id = "feedback";
            document.querySelector("#phraseInput").insertAdjacentElement("afterend", feedback);
        }
        feedback.textContent = "No message entered";
    }
}

document.getElementById("addPhraseButton").addEventListener("click", addPhrase);
// ...existing code...

