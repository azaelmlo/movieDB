// s l i d e r x
// s l i d e r x 
// s l i d e r x 

// function showSlides(n) {
//     var i;  
//     if (n > slides.length) {
//       slideIndex = 1
//     }
 
//     if (n < 1) {
//       slideIndex = slides.length
//     }
 
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
 
//     slides[slideIndex - 1].style.display = "block"; 
   
//   }

// const pulsoSlide = setInterval(() => {
//     showSlides(slideIndex += 1);
//   }, 8000);

// function plusIzq() {
// 	showSlides(slideIndex -= 1);
// 	clearInterval(pulsoSlide);
//     pulsoSlide();
// }

// function plusSlides() {
//   showSlides(slideIndex += 1);
//   clearInterval(pulsoSlide);
//   pulsoSlide();
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n); 
// }


//  o b s e r v a   a  l a s  c a t e g o r i a s  e n   h o m e
//  o b s e r v a   a  l a s  c a t e g o r i a s   e n   h o m e
//  o b s e r v a   a  l a s  c a t e g o r i a s   e n   h o m e

const observaCategoriasEnHome = () => {

  const ajustaVisibilidad = (entradas) => { 
      entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
              entrada.target.classList.add('visible');
          } else {
              entrada.target.classList.remove('visible');
          } 
      });
  }

  const observador = new IntersectionObserver(ajustaVisibilidad, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.3
  });


  observador.observe(contentCategorias);

}



// o b s e r v a r   t i t u l o   d e   b i e n v e n i d o
// o b s e r v a r   t i t u l o   d e   b i e n v e n i d o

const observaTituloBienvenidaHome = () => {
  
  const bienvenidaAnim = (entradas) => { 
      entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
              entrada.target.classList.add('visible');
              contentTendencias.classList.remove('activo');
          } else {
              entrada.target.classList.remove('visible');
              contentTendencias.classList.add('activo');
          }

          // agregarClaseActivo(entrada.target, 'visible');
          // agregarClaseActivo(contentTendencias, 'activo');
      }); 
  }

  const observadorBienvenida = new IntersectionObserver(bienvenidaAnim, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 1
  });


  observadorBienvenida.observe(contentBienvenido);

}


// o b s e r v a r   p e l i c u l a s   d e   c a t e g o r i a
// o b s e r v a r   p e l i c u l a s   d e   c a t e g o r i a

// const observaPelisCategoria = () => {

//   const unaPeliDeCategoria = document.querySelectorAll(".unaPeliDeCategoria")

//   const observadorunaPeliCate = new IntersectionObserver(entradas => {
//     entradas.forEach(entrada => {
//       entrada.target.classList.toggle("visible", entrada.isIntersecting)
//   }); 
//   });

//   unaPeliDeCategoria.forEach(el => {
//     observadorunaPeliCate.observe(el)
//     })
 
// }
 
const obserVariasPelis = () => {

    const variasPelis = document.querySelectorAll(".animVariasP")
  
    const observadorunaPeliVa = new IntersectionObserver(entradas => {
      entradas.forEach(entrada => {
        entrada.target.classList.toggle("visible", entrada.isIntersecting)
    }); 
    });
  
    variasPelis.forEach(el => {
        observadorunaPeliVa.observe(el)
      })
   
  }
 
 






