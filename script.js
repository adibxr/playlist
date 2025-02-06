/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100 },
            "size": { "value": 3 },
            "move": { "speed": 2 }
        }
    });

    const volumeSlider = document.getElementById("volume-slider");
    volumeSlider.addEventListener("input", function () {
        let volume = volumeSlider.value / 100;
        document.getElementById("spotify-frame").contentWindow.postMessage({ type: "setVolume", volume }, "*");
    });
});
