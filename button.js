let messages = [
    "Silly goose",
    "Are you a wizard?",
    "Did you know?",
    "Cheese Monkey",
    "Have you drank enough water?",
    "You're a star!",
    "They are behind you!",
    "Quick, run!"
];

function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
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

function addPhrase(string) {
    const phraseInput = document.getElementById("phraseInput");
    const newPhrase = phraseInput.value;
    if (newPhrase) {
        messages.push(newPhrase);
        phraseInput.value = '';
    } else {
        // Show feedback to the user
        let feedback = document.querySelector("#feedback");
        if (!feedback) {
            feedback = document.createElement("div");
            feedback.id = "feedback";
           
            document.querySelector("#phraseInput").insertAdjacentElement("afterend", feedback);
        }
        feedback.textContent = "No message entered";
    }
messages.push(newPhrase);
}


// ...existing code...

document.getElementById("addPhraseButton").addEventListener("click", addPhrase);