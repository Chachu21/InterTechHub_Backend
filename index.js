import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//instantiate the express
const app = express();
const port = process.env.PORT || 5001;
// Middleware for parsing JSON request bodies

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.status(200).send("my first web server ");
});
app.get("/name", (req, res) => {
  res.status(200).send("chalachew tsegaye ");
});
app.get("/hobby", (req, res) => {
  res.status(200).json({
    hobby: "I love reading books",
  });
});
app.get("/dream", (req, res) => {
  res.status(200).json({
    dream:
      "My dream is to create innovative technology solutions that empower people and transform lives. Believe in your dreams, work hard, and make them a reality!",
  });
});

//listen the coming request on port 5001
app.listen(port, () => console.log(`Server running on port ${port}`));
