/* =========================================
   TEXT TO SPEECH
========================================= */
function speak(text) {
  if (!text) return;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

/* =========================================
   FOCUS DETECTION
   When user presses TAB
========================================= */
document.addEventListener("focusin", (event) => {

  const element = event.target;

  chrome.runtime.sendMessage(
    {
      type: "EXPLAIN_ELEMENT",
      element: element.outerHTML
    },
    (response) => {
      if (response && response.reply) {
        speak(response.reply);
      }
    }
  );

});

/* =========================================
   VOICE RECOGNITION
========================================= */
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";

  recognition.onresult = function (event) {

    const command =
      event.results[event.results.length - 1][0].transcript.toLowerCase();

    chrome.runtime.sendMessage(
      {
        type: "PROCESS_COMMAND",
        command: command
      },
      (response) => {
        if (response && response.action) {
          executeAction(response.action);
        }
      }
    );
  };

  recognition.onerror = function (event) {
    console.error("Speech recognition error:", event.error);
  };

  recognition.start();

} else {
  console.error("Speech Recognition not supported in this browser.");
}

/* =========================================
   EXECUTE ACTION
========================================= */
function executeAction(action) {

  if (!action || action === "none") return;

  if (action === "click") {
    document.activeElement.click();
    speak("Clicked.");
  }

  if (action === "scroll_down") {
    window.scrollBy(0, 500);
    speak("Scrolling down.");
  }

  if (action === "scroll_up") {
    window.scrollBy(0, -500);
    speak("Scrolling up.");
  }
}