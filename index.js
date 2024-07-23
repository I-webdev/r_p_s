
import express from "express";
import bodyparser from "body-parser"
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("build"));


app.get("/", (req, res)=>{
    
    
    res.render("index.ejs");
});

// app.post("/s", (req, res) => {
    

//   console.log(req);
//   console.log("fgf");
//   res.render("index.ejs");
// });





app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})