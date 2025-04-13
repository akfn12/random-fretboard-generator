const notes = ['C', 'C#', 'Db', 'D#', 'Eb', 'E',
    'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
    'A', 'A#', 'Bb', 'B'];

function generateNote() {
const randomNote = notes[Math.floor(Math.random() * notes.length)];
document.getElementById('note').textContent = randomNote;
}

function startAutoGenerate() {
    const autoBtn = document.getElementById('auto-btn');
    const intervalInput = document.getElementById('interval-input');
    const noteDisplay = document.getElementById('note');
  
    // 입력값을 초 단위 숫자로 변환 (기본값은 3초)
    let intervalSeconds = parseFloat(intervalInput.value);
    if (isNaN(intervalSeconds) || intervalSeconds <= 0) {
      intervalSeconds = 3; // 기본값
    }
    const intervalMillis = intervalSeconds * 1000;
  
    // 버튼 상태 변경
    autoBtn.textContent = "연속 생성중...";
    autoBtn.classList.add("generating");
    autoBtn.disabled = true;
  
    noteDisplay.textContent = "";
    let count = 0;
  
    function generateNext() {
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      noteDisplay.textContent += `${randomNote} `;
      count++;
      if (count < 5) {
        setTimeout(generateNext, intervalMillis);
      } else {
        autoBtn.textContent = "연속 생성";
        autoBtn.classList.remove("generating");
        autoBtn.disabled = false;
      }
    }
  
    generateNext();
  }
  
