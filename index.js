// Déclarer et initialiser Dotenv
const dotenv = require("dotenv").config();


// Déclarer et initialiser Express
const express = require('express');
const app = express();
// fonction middleware d'analyse du corps des requêtes de formulaire. (extended: true) permet de parser les objets et les tableaux.
app.use(express.urlencoded({ extended: true }));
// Déclarer le répertoire de fichiers statiques.
app.use(express.static("public"));

// déclarer le viewEngine et le dossier des views 
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Charger le PORT du serveur depuis les variables d'environnement
const PORT = process.env.PORT || 4000;

// Initialiser le serveur Express.js
app.listen(PORT, () => {
    console.log(`👍 Server started on http://localhost:${PORT}`);
});
