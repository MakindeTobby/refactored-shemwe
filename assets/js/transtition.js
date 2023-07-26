// const transitionAudio = document.getElementById('transition-audio');
// const heroText = document.querySelector('.hero-text');
// window.onload = function () {
//     transitionAudio.play();
// }
// document.addEventListener('DOMContentLoaded', () => {

// Start the transition when the content is loaded
// heroText.classList.add('visible');
// transitionAudio.play();

// // Stop the audio after 3 seconds (adjust the duration as needed)
// setTimeout(() => {
//     transitionAudio.pause();
//     transitionAudio.currentTime = 0; // Reset the audio to the beginning
// }, 3000);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const heroText = document.querySelector('.hero-text');
//     const transitionAudio = document.getElementById('transition-audio');
//     let isAudioStarted = false;
//     heroText.classList.add('visible');

//     document.addEventListener('click', () => {
//         if (!isAudioStarted) {
//             transitionAudio.play();
//             isAudioStarted = true;
//         }
//     });

//     // Stop the audio after 3 seconds (adjust the duration as needed)
//     setTimeout(() => {
//         if (isAudioStarted) {
//             transitionAudio.pause();
//             transitionAudio.currentTime = 0; // Reset the audio to the beginning
//         }
//     }, 5000);
// });
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    // const transitionAudio = document.getElementById('transition-audio');

    // Make sure the audio is muted
    // transitionAudio.muted = true;

    heroText.classList.add('visible');
    // transitionAudio.play();

    // Unmute the audio after a short delay (adjust the delay as needed)
    // setTimeout(() => {
    //     transitionAudio.muted = false;
    // }, 100);

    // Stop the audio after 3 seconds (adjust the duration as needed)
    // setTimeout(() => {
    //     transitionAudio.pause();
    //     transitionAudio.currentTime = 0; // Reset the audio to the beginning
    // }, 3000);
});

// function increaseTextSizeAndWeight() {
//     const myTextElement = document.getElementById('my-text');
//     myTextElement.style.fontSize = '24px'; // Set the font size (adjust the value as needed)
//     myTextElement.style.fontWeight = 'bold'; // Set the font weight to bold
// }
const zoomText = document.querySelector(".zoom-text");
const hidden = document.querySelector(".hidden-div");

function zoomIn() {
    zoomText.style.transform = "scale(1.2)";

    zoomText.classList.add("text-stroke-light")
    hidden.style.opacity = "1"

}

function zoomOut() {
    zoomText.style.transform = "scale(1)";
    zoomText.classList.remove("text-stroke-light")
    hidden.style.opacity = "0"

}