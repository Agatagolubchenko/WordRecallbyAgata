let selectedLanguage = "";
let audioFiles = {
    "English": "English.mp3",
    "Chinese": "Chinese.mp3",
    "Russian": "Russian.mp3",
    "Vietnamese": "Vietnamese.mp3"
};

function startGame() {
    selectedLanguage = document.getElementById("language-select").value;
    document.getElementById("game-container").style.display = "block";
    let audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = audioFiles[selectedLanguage];
    audioPlayer.play();

    let wordsContainer = document.getElementById("words-container");
    wordsContainer.innerHTML = ""; // Clear any previous inputs

    // Create 32 input boxes but disable them initially
    for (let i = 1; i <= 32; i++) {
        let inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.className = "word-box";
        inputBox.placeholder = "Word " + i;
        inputBox.disabled = true; // Initially disabled
        wordsContainer.appendChild(inputBox);
    }

    // Enable inputs only after the audio has finished playing
    audioPlayer.onended = function() {
        let inputs = document.querySelectorAll(".word-box");
        inputs.forEach(input => input.disabled = false);
        document.getElementById("submit-button").disabled = false;
    };
}

function submitWords() {
    alert("Please take a screenshot of your answers before closing this page.");
}
