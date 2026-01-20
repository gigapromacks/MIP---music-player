const express = require('express');
const cors = require("cors");//хз зачем но так будет работаь
const path = require('path');
// 1. Настраиваем куда сохранять файлы
const multer = require("multer");

const { json } = require('body-parser');
const app = express();
app.use(cors());

// Настройка хранилища
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        // Сохраняем оригинальное имя файла
        const originalName = file.originalname;
        // Или с timestamp: const uniqueName = Date.now() + '-' + originalName;
        cb(null, originalName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100 * 1024 * 1024, // 100MB - увеличьте по необходимости
        files: 1
    },
    fileFilter: (req, file, cb) => {
        // Разрешаем аудио файлы
        const allowedTypes = [
            'audio/mpeg', 
            'audio/mp3', 
            'audio/wav', 
            'audio/ogg',
            'audio/x-m4a',
            'audio/aac'
        ];
        
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Разрешены только аудио файлы (MP3, WAV, OGG, M4A)'), false);
        }
    }
});
app.use('/uploads', express.static('uploads'));
// УВЕЛИЧЬТЕ ЛИМИТЫ ДО ИСПОЛЬЗОВАНИЯ ПАРСЕРОВ
app.use(express.json({ limit: '50mb' })); // Увеличьте лимит JSON
app.use(express.urlencoded({ 
    limit: '50mb', 
    extended: true 
}));
// ===================
// СТАТИЧЕСКИЕ ФАЙЛЫ
// ===================
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../fornt")));


let file=[];
let  name=[];
let avtor=[];


app.get('/', function(req,res){
    res.sendFile("index.html", { root: path.join(__dirname, "../fornt") } );//req.send('<h1>1</h1>');
})
app.get('/Cr', function(req,res){
    res.sendFile("createMuz.html", { root: path.join(__dirname, "../fornt") } );//req.send('<h1>1</h1>');
})
// Только маршрут /upload принимает файлы
app.post('/create', upload.single("filedata"), function(req,res){
    name.push(req.body.name);
   avtor.push(req.body.avtor);
file.push(req.file.filename);


res.send("PON");
//res.json({name, zena, zenaS ,file});
})
app.post('/GetCreate', function(req,res){
  
    
  
  
  res.json({name, avtor,file});
  })
app.listen(5000);