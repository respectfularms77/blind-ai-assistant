Blind AI Assistant: A Conversational Vision-Language Accessibility Agent
The Blind AI Assistant is an intermediate-level AI-powered Chrome extension designed to solve a critical real-world problem: digital exclusion. While 1.3 billion people globally live with visual impairments, 96.8% of the top one million website homepages still have detectable WCAG failures. This project moves beyond traditional, passive screen readers to create a proactive, agentic assistant that "understands" the web.

🚀 The Vision
Traditional screen readers rely on static code (ARIA tags) which are often missing or broken. Our assistant utilizes a Vision-Language Agentic approach to construct a Live Semantic Scene Graph of the webpage. It doesn't just read the code; it interprets the visual layout and intent, allowing for a natural, bidirectional voice dialogue.

🛠️ Tech Stack
Frontend (Chrome Extension)
JavaScript (ES6+): Core logic for DOM manipulation.

Chrome Extension Manifest V3: Modern, secure, and performant extension architecture.

DOM API: Real-time element detection and state tracking.

Web Speech API: High-accuracy Speech-to-Text (Recognition) and Text-to-Speech (Synthesis).

Backend
Node.js & Express.js: Scalable server-side logic and API routing.

REST APIs: Secure communication bridge between the client and AI services.

AI Integration
Google Gemini API: Utilized for contextual reasoning, summarization, and natural language command understanding.

Contextual Mapping: Translates raw DOM structures into human-understandable descriptions.

💎 Project Impact & Innovation (Hackathon Entry)
What makes your project unique or innovative?
Unlike traditional assistive tools that perform linear "tabbing" through code, this agent uses a Conversational Semantic Scene Graph. By leveraging the Gemini API, it interprets the visual intent of a page. Users can ask natural questions like "Is there a login form?" or "What just changed on the screen?" instead of manually scanning every element. This transforms the browser from a static document into an interactive partner.

Target audience/users
Visually Impaired Individuals: Specifically the 1.3 billion people worldwide who face barriers in the digital economy.

Elderly Population: Users with age-related vision decline who require simpler, voice-first navigation.

Web Developers: As an auditing tool to experience how their sites are perceived by autonomous AI agents.

Real-world applications or impact
In benchmark testing, AI agents using accessibility data (like the Accessibility Tree) achieved an 85% task success rate, compared to just 50% for vision-only models. By enabling voice-to-intent navigation, we restore independence for essential tasks like online banking, e-commerce, and digital education.

Future development plans
Self-Reflective RAG: Implementing memory to remember user navigation preferences and frequent sites.

Edge AI Transition: Moving processing to TensorFlow Lite or ONNX for local, privacy-first data handling on the device.

Multi-modal Support: Integrating real-time video stream analysis to describe visual shifts in dynamic web apps (e.g., live dashboards).

📂 Repository Structure
/extension: Contains the manifest.json, content.js (DOM analyzer), and background.js (API manager).

/server: Node.js backend handling the Gemini API orchestration.

/assets: UI components and icons for the Chrome extension popup.
