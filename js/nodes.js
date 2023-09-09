
const bodyPage = document.getElementById('bodyMovie');
const contentBienvenido = document.getElementById('contentBienvenido')

// titulares
const templateTitDos = document.getElementById('encabezadoNivelDos').content; 
const templateTitTres = document.getElementById('encabezadoNivelTres').content;

const formBusqueda = document.getElementById('buscadorPelis');
const inputBusqueda = document.querySelector('#buscadorPelis #buscar');

// nodos de tendencias 
const contentTendencias = document.getElementById('contentTendencias');
const template = document.getElementById('templateTendencias').content;

const fragmento = document.createDocumentFragment();

// nodos de categorias 
const contentCategorias = document.getElementById('contentCategorias');
const todasLasCategorias = document.getElementById('todasLasCategorias');
const listaCategorias = document.getElementById('listCategoriaMovie');

const templateCate = document.getElementById('templateCategoria').content;
const fragmentoCate = document.createDocumentFragment();


// peliculas de una categoria 

const contentPeliculasUnaCat = document.getElementById('contentPeliculasDeUnaCategoria')
const templatePeliculasUnaCat = document.getElementById('templateUnaCategoria').content;
const fragmentoPeliculasUnaCat = document.createDocumentFragment();

// busqueda 

const contentFormulario = document.getElementById('contentFormulario');
const contentBusqueda = document.getElementById('contentBusqueda')
const templateBusqueda = document.getElementById('templateBusqueda').content;
const fragmentoBusqueda = document.createDocumentFragment();

// detalles de una pelicula

const contentDetailsUnaPeli = document.getElementById('contentDetailsUnaPeli'); 
const templateDetails = document.getElementById('templateDetails').content;
const fragmentoDetails = document.createDocumentFragment();
const fragmentoRelacionado = document.createDocumentFragment();