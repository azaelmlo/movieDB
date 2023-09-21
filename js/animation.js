

const cargarTendencias = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            console.log("la imagen esta en el viewport")
        }
        
    });
 }

const observador = new IntersectionObserver(cargarTendencias, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});


observador.observe(contentTendencias);

// contentCategorias
// contentTendencias 