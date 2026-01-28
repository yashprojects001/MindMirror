const experience = document.getElementById("experience");
const audio = document.getElementById("audio");

const moods = {
  calm: {
    bg: "linear-gradient(120deg, #355c7d, #6c5b7b)",
    text: "Breathe in slowly. You are allowed to slow down.\n\nReflection: What feels peaceful right now?",
    audio: "audio/calm.mp3"
  },
  sad: {
    bg: "linear-gradient(120deg, #232526, #414345)",
    text: "It's okay to feel heavy sometimes.\n\nReflection: What do you wish someone understood?",
    audio: "audio/sad.mp3"
  },
  curious: {
    bg: "linear-gradient(120deg, #56ab2f, #a8e063)",
    text: "Curiosity is the beginning of growth.\n\nReflection: What are you wondering about lately?",
    audio: "audio/curious.mp3"
  },
  anxious: {
    bg: "linear-gradient(120deg, #614385, #516395)",
    text: "Nothing is chasing you right now.\n\nReflection: What is actually in your control?",
    audio: "audio/anxious.mp3"
  },
  happy: {
    bg: "linear-gradient(120deg, #f7971e, #ffd200)",
    text: "Let yourself enjoy this moment.\n\nReflection: What made today lighter?",
    audio: "audio/happy.mp3"
  }
};

function setMood(mood) {
  document.body.style.background = moods[mood].bg;
  experience.innerText = moods[mood].text;
  audio.src = moods[mood].audio;
  audio.play();
  saveHighlights();
}

function highlightText() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const mark = document.createElement("mark");
  range.surroundContents(mark);
  selection.removeAllRanges();
  saveHighlights();
}

function saveHighlights() {
  localStorage.setItem("mindmirror_content", experience.innerHTML);
}

function loadHighlights() {
  const saved = localStorage.getItem("mindmirror_content");
  if (saved) experience.innerHTML = saved;
}

function clearHighlights() {
  localStorage.removeItem("mindmirror_content");
  location.reload();
}

loadHighlights();
