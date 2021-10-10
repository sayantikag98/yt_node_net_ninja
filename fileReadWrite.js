// const os = require("os");
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.platform());

// console.log(__dirname);

const fs = require("fs");
// fs.readFile("./text.txt", (err, data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     fs.writeFile("./output.txt",data, ()=>{});

// });

// fs.rmdir("./asset",{recursive:true, force:true},(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// });

// fs.rmdir("../../../Desktop/input.txt", {recursive: true, force:true}, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// })

if(fs.existsSync("../../../Desktop/input.txt")){
    fs.unlink("../../../Desktop/input.txt", (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("file deleted");
    })
}