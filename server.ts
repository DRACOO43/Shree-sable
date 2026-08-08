import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Gemini client safely
  let aiClient: GoogleGenAI | null = null;
  function getAIClient() {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return aiClient;
  }

  const RESUME_CONTEXT = `
  Name: Shree Sable
  Role: Artificial Intelligence & Machine Learning Student
  Email: shreesable15@gmail.com
  Phone: +91 7447694491
  Location: Pune, Maharashtra, India
  Education: Diploma in Artificial Intelligence & Machine Learning at Ajeenkya DY Patil School of Engineering (2024 - 2027)
  Internship: Pro Azure - Student Intern (3 months duration)
  Technical Skills: Python, Java, C, MySQL
  Tools & Technologies: Git, GitHub, VS Code, Figma
  Spoken Languages: English, Hindi, Marathi
  Soft Skills: Strategic Planning, Scheduling, Communication Skills
  Profile Summary: Dedicated Artificial Intelligence and Machine Learning student with a strong foundation in programming, full stack web development, and AI technologies. Passionate about developing real-world applications.
  `;

  // API endpoint for AI Career Assistant
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'A valid message string is required.' });
      }

      const client = getAIClient();
      if (!client) {
        // Fallback intelligent responder if API key is not yet set
        const lowerMsg = message.toLowerCase();
        let reply = "Hello! I am Shree Sable's AI Portfolio Assistant. ";
        if (lowerMsg.includes('skill') || lowerMsg.includes('python') || lowerMsg.includes('java') || lowerMsg.includes('mysql')) {
          reply += "Shree possesses strong technical skills in Python, Java, C, and MySQL, alongside modern tools like Git, GitHub, VS Code, and Figma.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('reach') || lowerMsg.includes('hire')) {
          reply += "You can connect directly with Shree Sable via email at shreesable15@gmail.com or phone at +91 7447694491.";
        } else if (lowerMsg.includes('intern') || lowerMsg.includes('azure') || lowerMsg.includes('experience') || lowerMsg.includes('work')) {
          reply += "Shree completed a 3-month Student Internship at Pro Azure, building practical knowledge in cloud computing and AI workflow integration.";
        } else if (lowerMsg.includes('education') || lowerMsg.includes('college') || lowerMsg.includes('degree') || lowerMsg.includes('school')) {
          reply += "Shree is pursuing a Diploma in Artificial Intelligence & Machine Learning (2024 - 2027) at Ajeenkya DY Patil School of Engineering.";
        } else if (lowerMsg.includes('language') || lowerMsg.includes('speak')) {
          reply += "Shree is fluent in English, Hindi, and Marathi.";
        } else {
          reply += "Shree Sable is an AIML student passionate about developing real-world full-stack web applications and AI solutions. Feel free to ask about Shree's skills, internship, education, or contact details!";
        }
        return res.json({ response: reply });
      }

      const prompt = `You are the friendly, professional AI Career Assistant on Shree Sable's personal portfolio website. 
Answer recruiter, interviewer, or visitor questions concisely, enthusiastically, and accurately based on Shree Sable's resume profile below:

${RESUME_CONTEXT}

Visitor Question: ${message}`;

      const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return res.json({ response: response.text || "Thank you for asking! Shree is an AI & ML student dedicated to building impactful applications." });
    } catch (err: any) {
      console.error('Error in /api/chat:', err);
      return res.status(500).json({ error: 'Failed to process AI response.' });
    }
  });

  // Serve Vite in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
