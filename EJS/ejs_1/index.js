import express from "express";


const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(port);
})


app.get("/",(req,res)=>{
const today = new Date();
const day = today.getDay();
let type = "its weeky day";
let adv = "give it your best";
if (
    day == 0 || day ==6
){
    let type = "its a weekend";
    let adv = "have fun";
}
    res.render(
        "index.ejs",{
            daytype: type,
            advice: adv
        }
    )
}

)