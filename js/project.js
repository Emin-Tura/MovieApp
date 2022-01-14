const movieAdd = document.querySelector('.addBtn');
const movieNameElement = document.querySelector('#movieName');
const directorElement = document.querySelector('#director');
const linkElement = document.querySelector('#link');
const sectionBanner = document.querySelector('.section-banner');
const clear = document.querySelector('.clearAll');

eventListeners();

function eventListeners() {
  movieAdd.addEventListener('click', addFilm);
  document.addEventListener('DOMContentLoaded', () => {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });
  sectionBanner.addEventListener('click', deleteFilm);
  clear.addEventListener('click', clearAllFilms);
}

function addFilm(e) {
  const title = movieNameElement.value;
  const director = directorElement.value;
  const url = linkElement.value;

  if (title === '' || director === '' || url === '') {
    //hata
    UI.displayMessages('Fill in All Fields!!!', 'danger');
    console.log('Doldur');
  } else {
    //Yeni film
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm); //arayuze film ekleme
    Storage.addFilmToStorage(newFilm);
    UI.displayMessages('Movie Successfully Added...', 'success');
  }

  UI.clearInput(movieNameElement, linkElement, directorElement);
  e.preventDefault();
}
function deleteFilm(e) {
  if (e.target.id === 'delete-film') {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
  }
}
function clearAllFilms() {
  if (confirm('Emin misiniz ?')) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsStorage();
  }
}
