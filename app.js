const app = require("express")();

//listening to request from localhost port 3000
app.listen(3000);

// status code and headers are added automatically by express


// HOME PAGE
app.get("/",(req, res)=>{
    // res.send("<h1>Hello World!!</h1>");
    res.sendFile(__dirname+"/views/index.html");
});

// ABOUT PAGE
app.get("/about", (req, res)=> {
    res.sendFile("./views/about.html", {root:__dirname});
});

// redirect
// ABOUT-ME PAGE
app.get("/about-me", (req, res)=> {
    res.redirect("/about");
});

// 404 error 
// 404 ERROR PAGE
app.use((req, res)=>{
    res.sendFile(__dirname + "/views/error.html");
    res.status(404);
})