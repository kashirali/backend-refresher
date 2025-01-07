import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(4000, () => {
  console.log("Server is listening on PORT: 4000");
});
