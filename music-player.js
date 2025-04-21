const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const volumeUpBtn = document.getElementById("volumeUp");
const volumeDownBtn = document.getElementById("volumeDown");

// Play/pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

// Volume +
volumeUpBtn.addEventListener("click", () => {
    audio.volume = Math.min(1, audio.volume + 0.1);
});

// Volume -
volumeDownBtn.addEventListener("click", () => {
    audio.volume = Math.max(0, audio.volume - 0.1);
});
