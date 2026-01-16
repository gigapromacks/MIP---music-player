function fullscreen() {
    document.documentElement.requestFullscreen();
}
function poiskMozg(){
    let poisk  = document.getElementById('poisk').value;
    let vseTovari = document.querySelectorAll('.muz');

vseTovari.forEach(function(el){
   let name = el.querySelector('.title').textContent.toLowerCase();
    // Если название содержит поисковое слово
    if(name.includes(poisk)){
       el.style.display = "block"; // Показываем
    } else {
        el.style.display = "none"; // Скрываем
    }
}

)}
function nast(){
  let gg=  document.getElementById('modal-cart');
gg.style.display = "block";
}
function zakrCart(){
    let gg=  document.getElementById('modal-cart');
    gg.style.display = "none";
}
/*document.body.addEventListener('click', function() {
    let gg=  document.getElementById('modal-cart');
    // Если клик НЕ по модалке и НЕ по её потомкам
    if (!gg.contains(event.target)) {
        gg.style.display = "none";
    }
});*/