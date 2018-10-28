var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
recognition.lang = 'th-TH'
recognition.interimResults = false
recognition.maxAlternatives = 1

var btn = document.getElementById('btn_speak');
var output = document.getElementById('output');

btn.onclick = ()=>{
    recognition.start();
    console.log('Ready to receive a color command.');
}

recognition.onspeechend = function() {
  recognition.stop(); // เมื่อพูดจบ ให้ปิดการบันทึกเสียง
}

recognition.onresult = function(event) {
  console.log(event.results)
  output.textContent = event.results[0][0].transcript;
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The [last] returns the SpeechRecognitionResult at the last position.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object
  
    // var last = event.results.length - 1;
    // var color = event.results[last][0].transcript;
  
    // diagnostic.textContent = 'Result received: ' + color + '.';
    // bg.style.backgroundColor = color;
    // console.log('Confidence: ' + event.results[0][0].confidence);
  }