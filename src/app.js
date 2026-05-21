import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("This is my server");
});
export { app };
