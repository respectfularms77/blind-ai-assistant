import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "models/gemini-pro"
});

app.post("/explain", async (req, res) => {
  try {
    const { element } = req.body;

    const result = await model.generateContent(
      `Explain this webpage element clearly for a blind user in simple words:\n${element}`
    );

    res.json({ reply: result.response.text() });

  } catch (error) {
    console.error("Explain Error:", error.message);
    res.status(500).json({ reply: "Gemini explain failed." });
  }
});

app.post("/command", async (req, res) => {
  try {
    const { command } = req.body;

    const result = await model.generateContent(
      `Convert this command into ONE word only:
click
scroll_down
scroll_up
none

Command: ${command}`
    );

    const text = result.response.text().toLowerCase();

    let action = "none";
    if (text.includes("click")) action = "click";
    if (text.includes("scroll_down")) action = "scroll_down";
    if (text.includes("scroll_up")) action = "scroll_up";

    res.json({ action });

  } catch (error) {
    console.error("Command Error:", error.message);
    res.status(500).json({ action: "none" });
  }
});

app.listen(5000, () => {
  console.log("Gemini server running on http://localhost:5000");
});