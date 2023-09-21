const cargarTendencias = (entradas) => {
    console.log(entradas);
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
        
    });
 }

const observador = new IntersectionObserver(cargarTendencias, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});


observador.observe(contentCategorias);

// contentCategorias
// contentTendencias 