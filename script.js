let speech = new SpeechSynthesisUtterance();

let speechButton = document.getElementById("listen");
let textElement = document.getElementById("text");
let voiceSelect = document.getElementById("voices");

let voices  = [];

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i)=>(voiceSelect[i])=new Option(voice.name ,i))
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value]
})

speechButton.addEventListener("click",()=>{
    speech.text = textElement.value;
    window.speechSynthesis.speak(speech);
})