const express=require("express");
const studentmodel =  require('./model');
const cors=require('cors');

const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.post('/create',(req,res)=>{
    var result = new studentmodel(req.body)
    result.save()
    res.send("data added");
})

app.get("/View",async (req,res)=>{
    var data = await  studentmodel.find()
    res.json(data);
})

app.delete('/delete/:id',async (req,res)=>{
     var id=req.params.id;
     await studentmodel.findByIdAndDelete(id);
     res.send("delete");
})

app.listen(3001,()=>{
    console.log("port is running");
})
app.put('/update/:id',async (req,res)=>{
    let id=req.params.id;
    await studentmodel.findByIdAndUpdate(id,req.body);
    res.send("updated");
})