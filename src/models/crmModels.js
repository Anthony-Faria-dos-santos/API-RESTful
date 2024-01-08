import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstname: {
        type : String, // Typage de la donnée
        required : "Enter a first name" // required indique que la donnée est obligatoire.
    },

    lastname: {
        type : String,
        required : "Enter a last name"
    },

    email: {
        type : String       
    },

    compagny: {
        type : String     
    },

    phone: {
        type : Number        
    },

    created_at: {
        type : Date,
        default : Date.now, // Si aucune valeur n'est spécifié lors de l'ajout d'une donnée dans la base de données, la valeur par défaut sera la date du jour.
        immutable : true // immutable = La date de création ne peut être modifiée si true
    },
    
})