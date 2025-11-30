const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("TESTE OK");
});

app.listen(3333, () => console.log("SERVIDOR TESTE RODANDO"));
