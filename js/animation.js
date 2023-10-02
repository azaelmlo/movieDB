const ajustaVisibilidad = (entradas) => { 
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
        
    });
 }


//  o b s e r v a   a  l a s  c a t e g o r i a s
//  o b s e r v a   a  l a s  c a t e g o r i a s 
//  o b s e r v a   a  l a s  c a t e g o r i a s 

const observador = new IntersectionObserver(ajustaVisibilidad, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});


observador.observe(contentCategorias);



// o b s e r v a r   t i t u l o   d e   b i e n v e n i d o
// o b s e r v a r   t i t u l o   d e   b i e n v e n i d o

const bienvenidaAnim = (entradas) => { 
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            contentTendencias.classList.remove('activo');
        } else {
            entrada.target.classList.remove('visible');
            contentTendencias.classList.add('activo');
        }
    }); 
 }

const observadorBienvenida = new IntersectionObserver(bienvenidaAnim, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});


observadorBienvenida.observe(contentBienvenido);
