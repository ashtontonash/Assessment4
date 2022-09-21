const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getMotivation, newMotivation, deleteMotivation, updateMotivation } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/motivation", getMotivation);
app.post("/api/motivation", newMotivation);
app.put("/api/motivation", updateMotivation);
app.delete("/api/motivation/:id", deleteMotivation);

app.listen(4000, () => console.log("Server running on 4000"));

