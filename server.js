const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect("mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterUNAM", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error de conexión", err));

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model("User", UserSchema);


app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    
    // Consulta vulnerable a inyección NoSQL
    const user = await User.findOne({ username, password });

    if (user) {
        res.send("Login exitoso");
    } else {
        res.status(401).send("Credenciales incorrectas");
    }
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
