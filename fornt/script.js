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
        // Устанавливаем громкость
        audio.volume = 0.5;
        
        // Когда песня начинает играть
        audio.addEventListener('play', function() {
            if (currentSong && currentSong !== audio) {
                currentSong.pause();
            }
            currentSong = audio;
        });
        
        // Когда песня заканчивается
        audio.addEventListener('ended', function() {
            console.log('Песня закончилась, включаем следующую...');
            
            // Находим индекс текущей песни
            let currentIndex = Array.from(audioPlayers).indexOf(this);
            
            // Если это не последняя песня
            if (currentIndex < audioPlayers.length - 1) {
                // Находим следующую песню
                let nextSong = audioPlayers[currentIndex + 1];
                
                // Останавливаем текущую
                this.pause();
                this.currentTime = 0;
                
                // Запускаем следующую
                setTimeout(function() {
                    nextSong.play();
                }, 500); // Небольшая задержка
            } else {
                // Если это последняя песня
                console.log('Это была последняя песня');
            }
        });
    });
});






//
//    КОД ИИ ЗАВЕРШЕН
//
//

async function fetchData() {
    try {
        const response = await fetch("/GetCreate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let data = await response.json();
        console.log("Данные получены:", data);
        
        
        
       
        // data.name, data.zena, data.zenaS - это МАССИВЫ
        // Выводим ВСЕ товары из массивов
        for(let i = 0; i < data.name.length; i++) {
            let Dname = data.name[i];
            let  avtor = data.avtor[i];
            let   file = data.file[i];
            console.log(`Название ${i+1}: ${Dname}, Автор: ${avtor}`);
            
            // Создаем отдельный div для КАЖДОГО товара
            let div = document.createElement('div');
          let button = document.createElement('button');
            let h2 = document.createElement('h2');
            button.textContent = "♥";
          
            h2.textContent = Dname;
            h2.classList.add('title');
            button.classList.add('muz-fav-btn');
           button.title = "Добавить в избранное";
          /*  //Avtor
            let priceDiv = document.createElement('h2');
            priceDiv.textContent =  avtor;
            priceDiv.classList.add('price');
            */
        
        
          
            // ДОБАВЬТЕ ЭТОТ ОБРАБОТЧИК:
            button.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    this.title = 'Добавить в избранное';
                } else {
                    this.classList.add('active');
                    this.title = 'Убрать из избранного';
                }
            });
        
            let audio = document.createElement('audio');
            audio.src = `/uploads/${file}`;
            audio.controls = true; // ← ЭТА СТРОКА
           
            let wave = document.createElement('div'); // Создаем волну
            wave.classList.add('muz-wave'); // ← ДОБАВЬТЕ ЭТО (класс для волны)

            audio.classList.add('muz-audio');
          
     
    //    div.append(priceDiv);
    div.append(button); 
    div.append(h2);
    div.append(audio); 
    div.append(wave);        
    div.classList.add('muz');
    
            
 
          
       
            
            // Найди контейнер
            let container = document.querySelector('.center') || document.body; // ✅ querySelector для классов

// Добавь товар в контейнер
container.append(div);  // ✅ Правильно
     
}
        
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
// Замените последнюю строку fetchData(); на:
document.addEventListener('DOMContentLoaded', function() {
    // Небольшая задержка для стабильности
    setTimeout(fetchData, 100);
}); 
}
fetchData();