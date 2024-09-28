function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){

    const filmList = document.getElementById("films");

    filmList.innerHTML += 
    `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;


}
UI.prototype.clearInputs = function(element1,element2,element3){ //Film ekledikten sonra inputumuzda yazdıklarımızın temizlenmesi için
    element1 = "";
    element2 = "";
    element3 = "";
}
UI.prototype.displayMessages = function(message,type){//Hata veya başarı mesajını burada gireriz.
    const cardBody = document.querySelector(".card-body");
    //Alert divi oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    //oluşturduğumuz div'i appendChild ile cardBody'in altına yükleme
    cardBody.appendChild(div);

    setTimeout(function(){ //Oluşturduğumuz div'i istediğimiz zamanda silme
        div.remove();
    },1500);


}