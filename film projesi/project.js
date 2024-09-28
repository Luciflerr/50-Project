const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// ui başlatma
const ui = new UI();

//

//tüm eventler
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){ //title, director, veya url boş ise bize hata vermesi için bu işlemi yaparız
        //Hata mesajı
        ui.displayMessages("Tüm alanları doldurun...","danger");

    }
    else{
        const newFilm = new Film(title,director,url); //Film.js'den film constructor'unu çekip yeni film oluşturduk.

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        Storage.addFilmToStorage(newFilm);//Storage'a film ekleme

        ui.displayMessages("Başarıyla eklenmiştir...","success");
        

    }

    //Başında ui olanlar ui.js'den çağırılmış olanlardır.

    ui.clearInputs(titleElement,directorElement,urlElement); //ui.js'de yazdığımız clearInputs'u çağırdık

    e.preventDefault();
}

