const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const mongoose = require("mongoose");
const Chat = require("./models/chat");

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
main()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//all chats
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

//new chat page
app.get("/chats/new",(req ,res) => {
    res.render("newchat.ejs");
});

//submit new chat
app.post("/chats",(req,res) => {
    let {from,message,to}=req.body;
    let newChat = new Chat({
        from : from,
        to: to,
        message: message,
        created_at : new Date()
    });
    // console.log(newChat);
    newChat
    .save()
    .then((result)=> {
        console.log(result);
    })
    .catch((err)=> {
        console.log(err);
    });
    res.redirect("/chats");
});

//open edit chat page
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chats = await Chat.findById(id);
    res.render("edit.ejs",{id,chats});
});

//submit edit chat
app.put("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let {message} = req.body;
    let chats = await Chat.findOneAndUpdate( { _id: id } ,{message : message},{ new: true }); // {new:true} Return the updated document
    res.redirect("/chats");
    console.log(chats);
});


// let chat1 = new Chat({
//     from : "Suvam",
//     to : "ainu",
//     message : "Hello",
//     created_at : new Date()
// });

// chat1.save()
// .then(data => {
//     console.log(data);
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
