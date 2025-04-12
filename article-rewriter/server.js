require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API endpoint for rewriting text
app.post('/api/rewrite', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Rewrite the following content in a natural, human-like and professional tone while preserving its original meaning:\n\n${text}`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.REFERER_URL,
          "X-Title": "Article Rewriter | All-in-One Tools"
        }
      }
    );

    const rewrittenText = response.data.choices[0]?.message?.content || "No rewritten content received.";
    res.json({ rewrittenText });
    
  } catch (error) {
    console.error("Backend rewrite error:", error);
    res.status(500).json({ error: error.message || "Failed to rewrite content" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
