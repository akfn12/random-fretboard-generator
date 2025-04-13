const notes = ['C', 'C#', 'Db', 'D#', 'Eb', 'E',
    'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
    'A', 'A#', 'Bb', 'B'];

function generateNote() {
const randomNote = notes[Math.floor(Math.random() * notes.length)];
document.getElementById('note').textContent = randomNote;
}

function startAutoGenerate() {
const autoBtn = document.getElementById('auto-btn');
autoBtn.textContent = "연속 생성중...";
autoBtn.classList.add("generating");
autoBtn.disabled = true;

const noteDisplay = document.getElementById('note');
noteDisplay.textContent = "";

let count = 0;

function generateNext() {
const randomNote = notes[Math.floor(Math.random() * notes.length)];
noteDisplay.textContent += `${randomNote} `;
count++;
if (count < 5) {
setTimeout(generateNext, 2000);  // 3초 간격
} else {
// 연속 생성 끝
autoBtn.textContent = "연속 생성";
autoBtn.classList.remove("generating");
autoBtn.disabled = false;
}
}

generateNext();
}
