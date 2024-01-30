const chapterName = document.getElementById("chapter");
const audio = document.getElementById("audio-chapter");
const PlayPauseButton = document.getElementById("play-pause");
const buttonNextChapter = document.getElementById("next");
const buttonPreviousChapter = document.getElementById("previous");

const chapterQuantity = 10;
let isPlaying = false;
let chapter = 1;

function PlayTrack() {
  PlayPauseButton.classList.remove("bi-play-circle-fill");
  PlayPauseButton.classList.add("bi-pause-circle-fill");
  audio.play();
 isPlaying = true;
}

function pauseTrack() {
  PlayPauseButton.classList.remove("bi-pause-circle-fill");
  PlayPauseButton.classList.add("bi-play-circle-fill");
  audio.pause();
 isPlaying = false;
}

function playOrpauseTrack() {
  if (isPlaying === true) {
    pauseTrack();
  } else {
    PlayTrack();
  }
}

function previousChapter() {
  if (chapter === 1) {
    chapter = chapterQuantity;
  } else {
    chapter -= 1;
  }
  audio.src = "books/dom-casmurro/" + chapter + ".mp3";
  chapterName.innerText = "Capítulo " + chapter;
  PlayTrack();
}

function nextChapter() {
  if (chapter < chapterQuantity) {
    chapter += 1;
  } else {
    chapter = 1;
  }
  audio.src = "books/dom-casmurro/" + chapter + ".mp3";
  chapterName.innerText = "Capítulo " + chapter;
  PlayTrack();
}

PlayPauseButton.addEventListener("click", playOrpauseTrack);
buttonPreviousChapter.addEventListener("click", previousChapter);
buttonNextChapter.addEventListener("click", nextChapter);
audio.addEventListener("ended", nextChapter);
