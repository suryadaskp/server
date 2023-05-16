const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://suryadas9072:suryadas9072@cluster0.mst02f6.mongodb.net/?retryWrites=true&w=majority")

//schema creation
let Schema = mongoose.Schema;

const studentSchema = new Schema({
    sname:String,
    sgrade:Number
});
var studentmodel = mongoose.model("student",studentSchema);
module.exports = studentmodel;