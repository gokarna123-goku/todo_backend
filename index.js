import express from "express";

const app = express();

const PORT = 800;

app.listen(PORT, () =>
  console.log(`your server is running successfully on port ${PORT}`)
);
