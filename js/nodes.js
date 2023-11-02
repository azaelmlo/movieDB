
const bodyPage = document.getElementById('bodyMovie');
const contentBienvenido = document.getElementById('contentBienvenido');


const fragmento = document.createDocumentFragment();
const fragmentoMovieDetail = document.createDocumentFragment();

const primerFondo = document.getElementsByClassName('primerFondo');

// titulares
const templateTitDos = document.getElementById('encabezadoNivelDos').content; 
const templateTitTres = document.getElementById('encabezadoNivelTres').content;

const formBusqueda = document.getElementById('buscadorPelis');
const inputBusqueda = document.querySelector('#buscadorPelis #buscar');

// nodos de tendencias 
const contentTendencias = document.getElementById('contentTendencias');
const sliderTendencias = document.getElementById('sliderTendencias');

const template = document.getElementById('templateTendencias').content;
const titTendencia = document.querySelector('.contentTendencias h3');

// nodos de categorias 
const contentCategorias = document.getElementById('contentCategorias');
const todasLasCategorias = document.getElementById('todasLasCategorias');
const listaCategorias = document.getElementById('listCategoriaMovie');

const templateCate = document.getElementById('templateCategoria').content;



// peliculas de una categoria 

const contentPeliculasUnaCat = document.getElementById('contentPeliculasDeUnaCategoria');
const templatePeliculasUnaCat = document.getElementById('templateUnaCategoria').content; 



// busqueda 

const contentFormulario = document.getElementById('contentFormulario');
const contentBusqueda = document.getElementById('contentBusqueda')
const templateBusqueda = document.getElementById('templateBusqueda').content; 

// detalles de una pelicula

const contentDetailsUnaPeli = document.getElementById('contentDetailsUnaPeli'); 
const templateDetails = document.getElementById('templateDetails').content; 