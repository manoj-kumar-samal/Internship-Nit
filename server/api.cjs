
const express=require("express");
const cors=require("cors");
const mongoClient=require("mongodb").MongoClient;

const constr="mongodb://127.0.0.1:27017"
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/employees",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{
        var database=clientObject.db("intership")
        database.collection("employee").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.get("/employee/:id",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{
        var database=clientObject.db("intership")
        database.collection("employee").findOne({id:req.params.id}).then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.post("/add-employee",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{

        var employee={
            id:req.body.id,
            name:req.body.name,
            Designation:req.body.Designation
        }


        var database=clientObject.db("intership")
        database.collection("employee").insertOne(employee).then(document=>{
            res.send();
            console.log("Registered..")
        })
    })
})

app.put("/edit-employee/:id",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{

        var employee={
            id:req.params.id,
            name:req.body.name,
            Designation:req.body.Designation
        }

        var database=clientObject.db("intership")
        database.collection("employee").updateOne({id:req.params.id},{$set:employee}).then(document=>{
            res.send();
            console.log("Updated...")
        })
        
    })
})

app.delete("/delete-employee/:id",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{
        var database=clientObject.db("intership")
        database.collection("employee").deleteOne({id:req.params.id}).then(document=>{
            res.send();
            console.log("Deleted...")
        })
    })
})

app.listen(4050)
console.log("Server Started http://127.0.0.1:4050")