
// FOR THE VIDEO PLAYER

// Get the buttons and the video elements
const captionBtn = Array.from(document.querySelectorAll('.captions'));
const mediaplayer = Array.from(document.querySelectorAll('video'));

// function
function toggleCaptionMode(event) {
    const button = event.target;
    const index = captionBtn.indexOf(button);
    const track = mediaplayer[index].textTracks[0];
    track.mode = (track.mode === 'hidden') ? 'showing' : 'hidden';
}
// for each button on click toggle the caption mode
captionBtn.forEach(button => button.addEventListener('click', toggleCaptionMode));


// FOR THE AUDIO PLAYER
const transcriptBtn = document.querySelector('.transcript-btn');
const transcript = document.querySelector('.transcript');

transcriptBtn.addEventListener('click', () => {
  transcript.classList.toggle('hidden');
});


