import express from "express";
import bodyParser from "body-parser";
import { path } from "path";
import { fileURLToPath } from "url";

const __dirname = path(fileURLToPath(import.meta.url));


const app = express();
const port = 5172;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended : true}));


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html");
    console.log(req.body);
    console.log(__dirname);
});
app.get("/check", (req,res) => {
    res.sendFile(__dirname+"/index.html");
    res.sendStatus(200);
    console.log(req.body);
});
app.post("/check", (req,res)=>{
    console.log(req.body);
    if(req.body.password==='ILoveProgramming'){
        res.sendFile(__dirname+"/public/secret.html");
    } else{
        res.sendFile(__dirname+"/public/index.html");
        res.redirect("/");

    }
});