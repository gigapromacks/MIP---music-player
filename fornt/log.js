/*let name = document.getElementById("name");
let zena = document.getElementById("zena");
let zenaS= document.getElementById("zenaS");*/

async function go(){
    let name = document.getElementById("name").value;
    let avtor = +document.getElementById("avtor").value;
    let fileI = document.getElementById("file");
    if(name === "" || avtor === "" ||fileI ===""){
        console.log("fplw");
     }
else{
   // Правильный вариант:
const formData = new FormData();
formData.append('name', name);        // текстовое поле
formData.append('avtor', avtor);        // текстовое поле  
formData.append('filedata', fileI.files[0]);    // файл!
/*const response = await fetch("/buy", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // ← НЕПРАВИЛЬНО!
    body: JSON.stringify({ name, zena, zenaS }),
});*///чтобы не забыть  
const response = await fetch("/create", {
    method: "POST",
    // НЕ указываем Content-Type! Браузер сам поставит
    body: formData  // ← отправляем FormData
});


    // если сервер вернул ошибку (500, 404, 403 — всё что угодно)
    if (!response.ok) {
        alert("Сервер ответил ошибкой: " + response.status);
        return;
    }
    window.open('http://192.168.0.116:5000/', '_parent');
  

}



}
