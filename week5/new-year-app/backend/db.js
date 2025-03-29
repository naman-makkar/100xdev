const mongoose = require("mongoose");

// title : string , description : string , completed : boolean

mongoose.connect("mongodb+srv://namanmakkar6:hello123@cluster0.5rn9nyo.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}