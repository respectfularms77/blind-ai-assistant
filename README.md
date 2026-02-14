# 👁️ Blind AI Assistant: Conversational Vision-Language Accessibility Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Platform-Chrome_Extension-blue.svg)](https://developer.chrome.com/docs/extensions/)
[![AI Powered](https://img.shields.io/badge/AI-Google_Gemini-green.svg)](https://ai.google.dev/)

**Blind AI Assistant** is an intermediate-level AI-powered Chrome extension designed to solve a critical real-world problem: **digital exclusion**. While 1.3 billion people globally live with visual impairments, 96.8% of the top one million website homepages still have detectable WCAG failures. 

This project moves beyond traditional, passive screen readers to create a proactive, agentic assistant that **"understands"** the web through a Vision-Language Agentic approach.

---

## 🚀 The Vision
Traditional screen readers rely on static code (ARIA tags) which are often missing or broken. Our assistant constructs a **Live Semantic Scene Graph** of the webpage. 

Instead of just reading the raw code, it interprets the visual layout and intent, allowing for a natural, bidirectional voice dialogue. This transforms the browser from a static document into an interactive partner.



---

## 🛠️ Tech Stack

### **Frontend (Chrome Extension)**
* **JavaScript (ES6+):** Core logic for DOM manipulation.
* **Manifest V3:** Modern, secure, and performant extension architecture.
* **DOM API:** Real-time element detection and state tracking.
* **Web Speech API:** High-accuracy Speech-to-Text (Recognition) and Text-to-Speech (Synthesis).

### **Backend**
* **Node.js & Express.js:** Scalable server-side logic and API routing.
* **REST APIs:** Secure communication bridge between the client and AI services.

### **AI Integration**
* **Google Gemini API:** Utilized for contextual reasoning, summarization, and natural language command understanding.
* **Contextual Mapping:** Translates raw DOM structures into human-understandable descriptions.

---

## 💎 Project Impact & Innovation
### **What makes this unique?**
Unlike traditional assistive tools that perform linear "tabbing" through code, this agent uses a **Conversational Semantic Scene Graph**. 

By leveraging the **Gemini API**, it interprets the visual intent of a page. Users can ask natural questions like:
* *"Is there a login form?"*
* *"What just changed on the screen?"*
* *"Summarize the main points of this article."*

### **Target Audience**
* **Visually Impaired Individuals:** Specifically the 1.3 billion people worldwide who face barriers in the digital economy.
* **Elderly Population:** Users with age-related vision decline who require simpler, voice-first navigation.
* **Web Developers:** As an auditing tool to experience how their sites are perceived by autonomous AI agents.

### **Real-World Impact**
In benchmark testing, AI agents using accessibility data achieved an **85% task success rate**, compared to just 50% for vision-only models. By enabling voice-to-intent navigation, we restore independence for essential tasks like online banking, e-commerce, and digital education.

---

## 🔮 Future Development Plans

### **Self-Reflective RAG**
Implementing a Retrieval-Augmented Generation (RAG) system with a memory layer to remember specific user navigation preferences, frequently visited sites, and personalized interaction patterns.

### **Edge AI Transition**
To ensure maximum user privacy and reduce latency, we plan to move core processing from the cloud to the local device using **TensorFlow Lite** or **ONNX**. This allows for offline, privacy-first data handling.

### **Multi-modal Support**
Integrating real-time video stream analysis to describe visual shifts in dynamic web applications (e.g., live stock dashboards, sports tickers, or progress bars) that standard DOM observers might miss.

---

## 📂 Repository Structure
```text
├── /extension
│   ├── manifest.json    # Extension configuration
│   ├── content.js       # DOM analyzer & observer logic
│   └── background.js    # API manager & background tasks
├── /server
│   ├── index.js         # Node.js backend handling Gemini API
│   └── .env             # API Keys (Git ignored)
└── /assets              # UI components and icons
