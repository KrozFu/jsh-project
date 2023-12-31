

window.addEventListener('DOMContentLoaded', event => { // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%'
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


// Función para crear un carrusel dinámico
function crearCarrusel(idCarousel, idCarouselInner, carpetaImagenes, imagenes) {
    const carouselInner = document.getElementById(idCarouselInner);

    imagenes.forEach((imagen, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.id = `${idCarousel}-${index}`;
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }
        const imagenElement = document.createElement('img');
        imagenElement.src = carpetaImagenes + imagen;
        imagenElement.style.width = "100%";
        imagenElement.style.height = "30rem";
        imagenElement.style.borderRadius = "20px";
        imagenElement.style.objectFit = "fill";
        imagenElement.classList.add('d-block', 'w-100');
        carouselItem.appendChild(imagenElement);
        carouselInner.appendChild(carouselItem);
    });

    let currentIndex = 0;
    let autoPlayInterval = setInterval(avanzarDiapositiva, 3000);

    function avanzarDiapositiva() {
        const items = carouselInner.querySelectorAll('.carousel-item');
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    // Detener el cambio automático cuando se pasa el cursor sobre el carrusel
    carouselInner.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    // Reanudar el cambio automático cuando se retira el cursor del carrusel
    carouselInner.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(avanzarDiapositiva, 3000);
    });
}
/*carousel 1 */
const rutaCarpeta1 = 'assets/img/jornadas/jornada_1/';
const imagenesCarrusel1 = [
    'imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg',
];
crearCarrusel('carouselExampleIndicators1', 'carouselInner1', rutaCarpeta1, imagenesCarrusel1);

/* Carousel 2 */
const rutaCarpeta2 = 'assets/img/jornadas/jornada_1/mas_img/';
const imagenesCarrusel2 = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg',
    'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg',
    'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg',
    'img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg',
];
crearCarrusel('carouselExampleIndicators2', 'carouselInner2', rutaCarpeta2, imagenesCarrusel2);


/* Carousel 3 */
const rutaCarpeta3 = 'assets/img/jornadas/jornada_2/mas_img/';
const imagenesCarrusel3 = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.JPG', 'img7.JPG', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg'
];
crearCarrusel('carouselExampleIndicators3', 'carouselInner3', rutaCarpeta3, imagenesCarrusel3);

/* Carousel 4 */
const rutaCarpeta4 = 'assets/img/jornadas/resistencias/';
const imagenesCarrusel4 = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.JPG', 'img6.JPG', 'img7.JPG', 'img8.jpg'
];
crearCarrusel('carouselExampleIndicators4', 'carouselInner4', rutaCarpeta4, imagenesCarrusel4);

/* Carousel 5 */
const rutaCarpeta5 = 'assets/img/jornadas/semillas/';
const imagenesCarrusel5 = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg',
];
crearCarrusel('carouselExampleIndicators5', 'carouselInner5', rutaCarpeta5, imagenesCarrusel5);


/* Carousel 6 */
const rutaCarpeta6 = 'assets/img/jornadas/alimentando/';
const imagenesCarrusel6 = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpeg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpeg', 'img10.jpeg', 'img11.jpeg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg', 'img17.jpg', 'img18.jpg'
];
crearCarrusel('carouselExampleIndicators6', 'carouselInner6', rutaCarpeta6, imagenesCarrusel6);


/* Carousel 7 */
const rutaCarpeta7 = 'assets/img/jornadas/tegiendo_saberes/';
const imagenesCarrusel7 = [
    'portada.jpg, img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'
];
crearCarrusel('carouselExampleIndicators7', 'carouselInner7', rutaCarpeta7, imagenesCarrusel7);


/* Carousel 8 */
const rutaCarpeta8 = 'assets/img/jornadas/naksi/';
const imagenesCarrusel8 = [
    'img1.jpg', 'img2.JPG', 'img3.jpg', 'img4.JPG', 'img5.JPG', 'img6.JPG', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'portada.jpg'
];
crearCarrusel('carouselExampleIndicators8', 'carouselInner8', rutaCarpeta8, imagenesCarrusel8);


/* Carousel 8 */
const rutaCarpeta9 = 'assets/img/jornadas/unal/';
const imagenesCarrusel9 = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.JPG'
];
crearCarrusel('carouselExampleIndicators9', 'carouselInner9', rutaCarpeta9, imagenesCarrusel9);