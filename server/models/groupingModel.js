const mongoose = require('mongoose')
//port = 27017
//dbName = fancy-todo
mongoose.connect('mongodb://localhost:27017/fancy-todo', {useNewUrlParser: true})
const {Schema} = mongoose

const groupingSchema = new Schema({
    title: String,
    description: String,
    UserId: {type: Schema.Types.ObjectId, ref: 'User'},
    TodoIds: [{ type: Schema.Types.ObjectId, ref: 'Todo'}]
})

const grouping = mongoose.model('Grouping', groupingSchema)
module.exports = grouping