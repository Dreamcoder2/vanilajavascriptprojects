const searchform = document.querySelector("#serach-form");
const searchinput = document.querySelector("#search-input");
const speechbtndiv = document.querySelector("#speech-btn");
const micbtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");
const speechrecoganation =
  window.speechRecoganation || window.webkitSpeechRecognition;

// check for browser supports
if (speechrecoganation) {
  console.log("supported");
  const recoganation = new speechrecoganation();
  micbtn.addEventListener("click", micbtnclicked);
  function micbtnclicked(e) {
    e.preventDefault();
    if (micbtn.classList.contains("fa-microphone")) {
      recoganation.start();
    } else {
      recoganation.stop();
    }
  }
  // starts speech reco
  recoganation.addEventListener("start", () => {
    micbtn.classList.remove("fa-microphone");
    micbtn.classList.add("fa-microphone-slash");
    instruction.textContent = "Recording...";
    searchinput.focus();
  });

  // stopspeech reco
  recoganation.addEventListener("end", () => {
    micbtn.classList.remove("fa-microphone-slash");
    micbtn.classList.add("fa-microphone");
    instruction.textContent = "click the mic icon to start";
    searchinput.focus();
  });

  // get results of the speech
  recoganation.continous = true;
  let content = "";
  recoganation.addEventListener("result", (e) => {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content += transcript;
    searchinput.value = content;
    searchinput.focus();
  });
} else {
  speechbtndiv.getElementsByClassName.visibility = "hidden";
}
