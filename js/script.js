'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addImput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector("[type='checkbox']"),
        genre = poster.querySelector('.promo__genre');

    addForm.addEventListener('submit', (e)=> {
        e.preventDefault();

        let newFilm = addImput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}... `;
            }
            
            if (favorite) {
                console.log('Adding a new movie!');
            }
             movieDB.movies.push(newFilm);
             sortArr(movieDB.movies);

             createMovieList(movieDB.movies, movieList);
        }
        e.target.request();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {

        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
        parent.innerHTML +=
            `<li class = "promo__interactive-item" >${i + 1}  ${film}
            <div class = "delete" > </div> 
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});





