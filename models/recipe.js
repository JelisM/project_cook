const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})


const  recipeSchema = new Schema ({

    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User",
        
    },
    name: { 
        type: String, 
        required: true
    },
    ingredients: { 
        type: String, 
        required: true
     },
     instructions: { 
         type: String
     },
comments: [commentSchema],




})

module.exports = mongoose.model('Recipe', recipeSchema)