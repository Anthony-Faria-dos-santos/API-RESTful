//! IMPORTS / DECLARATIONS des modules de notre projet
// Déclarer et initialiser Dotenv
import dotenv from "dotenv";
const result = dotenv.config();

// Déclarer et initialiser Express
import express from "express";
const app = express();

// Déclarer et importer le router dans l'application express
import routes from "./src/routes/crmRoutes.js";
routes(app);

// Importer Mongoose (Object Document Mapper) pour la connexion à la base de données MongoDB
import mongoose from "mongoose";
// Déclarer et initialiser la connexion à la base de données MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
    // useMongoClient: true, ---> Option deprecated depuis la version 5.0 de Mongoose
});

// BACKUP - Importer le module body-parser pour analyser les requêtes de formulaire
// dans le cas ou on ne veut/peux pas utiliser express.urlencoded({ extended: true })
// import bodyParser from "body-parser";
// app.use(bodyParser.urlencoded({ extended: true }));







// fonction middleware d'analyse du corps des requêtes de formulaire. (extended: true) permet de parser les objets et les tableaux.
app.use(express.urlencoded({ extended: true }));
// Déclarer le répertoire de fichiers statiques.
app.use(express.static("public"));

// Test de routage de la page d'acceuil
app.get("/", (req, res) => {
    res.send(`🟢  Server Node & Express has correctly been start on http://localhost:${PORT} `);
});

// déclarer le viewEngine et le dossier des views 
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Charger le PORT du serveur depuis les variables d'environnement
const PORT = process.env.PORT || 4000;

// Initialiser le serveur Express.js
app.listen(PORT, () => {
    console.log(`🟢 Server started on http://localhost:${PORT}`);
});
