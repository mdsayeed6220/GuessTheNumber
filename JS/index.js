const msg = document.getElementById("msg");

const randomNum = getRandom();

console.log(randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
  console.log(e);
  const msg = e.results[0][0].transcript;
  writeMessage(msg);
  checkNumber(msg);

}

function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListener("result", onSpeak);
