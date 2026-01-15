const express = require('express');
const cors = require("cors");//хз зачем но так будет работаь
const path = require('path');
// 1. Настраиваем куда сохранять файлы
//const multer = require("multer");

//const { json } = require('body-parser');
const app = express();
app.use(cors());
//const upload = multer({dest: "uploads"}); // ← папка "uploads"
//app.use('/uploads', express.static('uploads'));
//app.use(express.json());
// ===================
// СТАТИЧЕСКИЕ ФАЙЛЫ
// ===================
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../fornt")));
 
app.get('/', function(req,res){
    res.sendFile("index.html", { root: path.join(__dirname, "../fornt") } );//req.send('<h1>1</h1>');
})


app.listen(5000);