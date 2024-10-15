const mongoose = require("mongoose");
const Chat = require("./models/chat");
main()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
    from : "Suvam",
    to : "ainu",
    message : "Hello",
    created_at : new Date()
}, 
{
from : "Nizara",
to : "Suna",
message : "Don't watch tv",
created_at : new Date()
},
{
    from : "Bhonti",
    to : "Monjit",
    message : "Eat your dinner",
    created_at : new Date()
}
];

Chat.insertMany(allChats);
