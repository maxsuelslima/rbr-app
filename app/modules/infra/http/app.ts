import express from "express";

export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example ap listening on port 3000!");
});