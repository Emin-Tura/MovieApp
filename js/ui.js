class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById('movies');
    filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><button class="dltBtn btn">Delete to Movie</button></td>
</tr>
    `;
  }
  static clearInput(element1, element2, element3) {
    element1.value = '';
    element2.value = '';
    element3.value = '';
  }
  static displayMessages(message, type) {
    const section = document.querySelector('.section-login');
    const div = document.createElement('div');
    div.className = `${type}`;
    div.textContent = message;
    section.appendChild(div);

    //belirli bir sure sonra uidan silinsin

    setTimeout(() => {
      div.remove();
    }, 1000);
  }

  static loadAllFilms(films) {
    const filmList = document.getElementById('movies');

    films.forEach((film) => {
      filmList.innerHTML += `
      <tr>
          <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
          <td>${film.title}</td>
          <td>${film.director}</td>
          <td><button class="dltBtn btn"  id="delete-film" >Delete to Movie</button></td>
      </tr>
`;
    });
  }
  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }

  static clearAllFilmsFromUI() {
    const filmList = document.getElementById('movies');
    //Yavas yontem
    //filmList.innerHTML = '';

    while (filmList.firstElementChild !== null) {
      //child oldugu surece
      filmList.firstElementChild.remove();
    }
  }
}
