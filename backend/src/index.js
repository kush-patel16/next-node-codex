import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});