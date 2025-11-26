import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.get("/weather", async (req, res) => {
  try {
    const weatherAPI = process.env.WEATHER_API_KEY;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e8cacab803e54e3a9ce175851252511&q=Halifax&aqi=no`);
    const data = await response.json();
    res.json({
      city: data.location.name,
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
    });
  } catch (err) {
    console.error("Error fetching:", err);
  }
});
const projects = [
  {
    name: "Gitofy",
    author: "Rajveer",
    languages: ["Java", "GithubREST API"],
    description: "GitHub on go."
  },
  {
    name: "Chess Game",
    author: "Rajveer",
    languages: ["Java"],
    description: "Console-based chess engine with checkmate logic."
  },
  {
    name: "Peer",
    author: "Rajveer and Sidhant",
    languages: ["React", "Node.js", "Socket.io", "SupaBase"],
    description: "Coding collaboration online platform."
  },
  {
    name: "Groki",
    author: "Rajveer and Sidhant",
    languages: ["React", "Node.js", "Gemini", "SupaBase"],
    description: "Inventory management system."
  },

];
app.get("/projects", (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
