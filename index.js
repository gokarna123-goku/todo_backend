import express from "express";

import Connection from "./database/db.js";

const app = express();

const PORT = 800;

Connection();

app.listen(PORT, () =>
  console.log(`your server is running successfully on port ${PORT}`)
);
