const homePage = () => {
    console.log('estas en el home');
    limpiarPara('home');
    getTrendingMoviesPreview();
    getCategoriasMovies();
    setClass('pagehome');
    
    // title 
   asignarTituloNivelDos('Bienvenido', contentBienvenido);

   // animacion 
   observaTituloBienvenidaHome();
   observaCategoriasEnHome();
 
}

const categoryPage = () => {
    console.log('estas en la página de categories');
    limpiarPara('category');
    setClass('pagecategorias');
    if (window.location.hash.includes('=')) {
        const [_, categoryData] = location.hash.split('='); 
        const [categoryId, categoryName] = categoryData.split('-');
        getCategoryMoviesPreview(categoryId, categoryName);
    } else {
        contentPeliculasUnaCat.innerHTML = '';
    }

    getCategoriasMovies();
    // llama a tendencias 
    getTrendingMoviesPreview();
   
    // title 
   asignarTituloNivelDos('Categorías', contentCategorias);
 
}


const moviePage = () => {
    console.log('estas en la pagina de movie');
    limpiarPara('movieDetails');
    setClass('pageDetail');
    if (window.location.hash.includes('=')) {
        const [_, id] = location.hash.split('=');
        verPelicula(id);  
    }    
    // llama a tendencias 
    getTrendingMoviesPreview();
    // categorias 
    getCategoriasMovies();
}

const searchPage = () => {
    console.log('estas en la página de search');
    limpiarPara('search');
    setClass('pagesearch');
    if (window.location.hash.includes('=')) {
    const [_, query] = location.hash.split('=');
    verPeliculasPorSearch(query);  
    } else {
        contentBusqueda.innerHTML = '';
    }
    asignarTituloNivelDos('Busqueda de películas', contentFormulario); 
    // llama a tendencias 
    getTrendingMoviesPreview();
}


const trendsPage = () => {
    console.log('estas en la página de tends');
    limpiarPara('trends');
    setClass('pagetrends');
    getTrendingMoviesPreview(); 
    // title 
    asignarTituloNivelDos('Conoce las tendencias de la temporada', contentTendencias);
}

const navigator = () => {
    // c a m b i o s  e n  l a  n a v e g a c i o n
    escondeTitulosDos();
    // - - c a m b i o s  e n  l a  n a v e g a c i o n 
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search')) {
        searchPage();
    } else if (location.hash.startsWith('#movie')) {
        moviePage();
    } else if (location.hash.startsWith('#category')) {
        categoryPage();
    } else {
        homePage();
    }

    window.scrollTo(0, 0);   
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


// funcion retroceder en historial 

// arrowBtn.addEventListener('click', () => {
//     history.back();
// })



