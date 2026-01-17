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
)
}





//
//БОКОВЫЕ КНОПКИ (ДОМОЦЙ ИЗБРАНОЕ)
//
function PicFolow(){
    let vseTovari = document.querySelectorAll('.muz');
    let i = 0;
    let er = document.getElementById("er");
    vseTovari.forEach(function(el){
        // 1. Находим кнопку сердечка в этой песне
        let favButton = el.querySelector('.muz-fav-btn');
        
        // 2. Проверяем, красное ли сердечко (есть ли класс 'active')
        if (favButton.classList.contains('active')) {
            // Сердечко красное - показываем песню
            el.style.display = "block";
        i++;
        }
         else {
            // Сердечко не красное - скрываем песню
            el.style.display = "none";
        }
    
    
    });

    if(i==0){
        er.style.display = "block";
    }
}




function PicHome(){
    let vseTovari = document.querySelectorAll('.muz');
    er.style.display = "none";
    vseTovari.forEach(function(el){
       let name = el.querySelector('.title').textContent.toLowerCase();
        // Если название содержит поисковое слово
       
           el.style.display = "block"; // Показываем
        
    }
    )
}




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
//
// Добавление функциональности для музыкальных элементов
//
//!!!!!!!!!!!!!!  КОД ИИ!!!!!!!!!!!!!!!!
//

/*document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('.muz-audio');
    
    audioElements.forEach(audio => {
        const muzBlock = audio.closest('.muz');
        const favBtn = muzBlock.querySelector('.muz-fav-btn');
       
        // Кнопка избранного
        favBtn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.title = 'Добавить в избранное';
            } else {
                this.classList.add('active');
                this.title = 'Убрать из избранного';
            }
        });
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    const favBtns = document.querySelectorAll('.muz-fav-btn');
    
    favBtns.forEach(favBtn => {
        // Кнопка избранного
        favBtn.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.title = 'Добавить в избранное';
            } else {
                this.classList.add('active');
                this.title = 'Убрать из избранного';
            }
        });
    });
});




// Ждем полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Находим все аудио элементы
    let audioPlayers = document.querySelectorAll('audio');
    
    // Переменная для текущей играющей песни
    let currentSong = null;
    
    // Для каждого аудио
    audioPlayers.forEach(function(audio, index) {
        // Устанавливаем громкость (0.5 = 50%, 0.3 = 30% и т.д.)
        audio.volume = 0.5; // 30% громкости
        
        // Когда песня начинает играть
        audio.addEventListener('play', function() {
            // Если уже есть играющая песня И это не эта же песня
            if (currentSong && currentSong !== audio) {
                currentSong.pause();
            }
            currentSong = audio;
        });
    });
});






//
//    КОД ИИ ЗАВЕРШЕН
//
//
