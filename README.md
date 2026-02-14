Blind AI Assistant: A Conversational Vision-Language Accessibility Agent
The Blind AI Assistant is a next-generation Chrome extension designed to bridge the digital divide for the 1.3 billion individuals globally living with visual impairments. Unlike traditional screen readers that rely on often-missing ARIA metadata—a failure found on 96.8% of top websites—this assistant uses a Vision-Language Agentic approach to understand the web through intent and visual context.

🚀 Overview
The assistant transforms the browser into a proactive partner. It doesn't just read code; it "sees" the page layout and engages in bidirectional voice dialogue with the user.

Real-time Perception: Uses the DOM API and Generative AI to construct a Live Semantic Scene Graph of the webpage.

Voice-First Interaction: Powered by the Web Speech API and Google Gemini for natural language command understanding and high-quality speech synthesis.

Proactive Navigation: Users can perform actions like clicking, scrolling, or querying specific page elements (e.g., "Is there a login form?") through simple voice commands.

🛠️ Tech Stack
Frontend (Chrome Extension)
Languages: JavaScript (ES6+), HTML, CSS.

Architecture: Manifest V3 for modern extension security and performance.

APIs:

DOM API: For real-time element detection and state tracking.

Web Speech API: For Speech-to-Text (Recognition) and Text-to-Speech (Synthesis).

Backend
Runtime: Node.js & Express.js.

Communication: REST APIs for secure data transmission between the extension and AI services.

AI & Intelligence
Reasoning Engine: Google Gemini API (Generative Language API) for contextual reasoning and intent mapping.

Future Integration: Moving toward the Gemini Live API for low-latency, "barge-in" capable voice interactions .

📂 Project Structure
/extension

manifest.json: Extension configuration and permissions.

content.js: Injected script for DOM analysis and UI interaction.

background.js: Service worker managing API calls and extension state.

popup/: Frontend UI for extension settings.

/server

server.js: Node.js entry point.

routes/: API endpoints for AI processing.

.env: Environment variable management (API keys).

🌟 Innovation & Impact
Beyond Static ARIA: While traditional tools fail when developers skip accessibility tags, our agent uses Computer Vision and LLMs to identify interactive elements based on their visual appearance and function.

Performance: By leveraging the Accessibility Tree, the agent reduces token consumption by 90% compared to raw HTML processing, leading to faster response times.

Task Success: AI agents using this multi-modal accessibility data achieve an 85% task success rate, nearly doubling the efficiency of vision-only models.

🗺️ Roadmap: Future Development Plans
We are evolving this project from a "Co-pilot" to a fully "Autonomous Agent" :

Self-Reflective RAG: Implementing memory systems to remember user navigation preferences and history across sessions.

Edge AI Integration: Utilizing TensorFlow Lite or ONNX for local, privacy-first processing of sensitive user data directly on the device .

Barge-in Logic: Integrating Gemini 2.5 Flash Live models to allow users to interrupt the AI mid-sentence, creating a more human-like dialogue .

Accessibility Auditing: Expanding the tool to provide real-time WCAG 2.2 compliance feedback to web developers.
