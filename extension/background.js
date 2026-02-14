chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  // ===============================
  // EXPLAIN ELEMENT
  // ===============================
  if (request.type === "EXPLAIN_ELEMENT") {

    fetch("http://localhost:5000/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ element: request.element })
    })
      .then(res => res.json())
      .then(data => {
        sendResponse({ reply: data.reply });
      })
      .catch(error => {
        console.error("Explain error:", error);
        sendResponse({ reply: "Unable to explain this element." });
      });

    return true; // Required for async response
  }

  // ===============================
  // PROCESS COMMAND
  // ===============================
  if (request.type === "PROCESS_COMMAND") {

    fetch("http://localhost:5000/command", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ command: request.command })
    })
      .then(res => res.json())
      .then(data => {
        sendResponse({ action: data.action });
      })
      .catch(error => {
        console.error("Command error:", error);
        sendResponse({ action: "none" });
      });

    return true;
  }
});