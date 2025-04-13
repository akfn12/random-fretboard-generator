const notes = ['C', 'C#', 'Db', 'D#', 'Eb', 'E',
    'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
    'A', 'A#', 'Bb', 'B'];

function generateNote() {
const randomNote = notes[Math.floor(Math.random() * notes.length)];
document.getElementById('note').textContent = randomNote;
}
