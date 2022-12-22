import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Listening at : http://localhost:${port}`);
});
