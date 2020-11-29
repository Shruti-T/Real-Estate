var preloader = document.getElementById('preloading');


function codeLoaded() {
    preloader.style.display = 'none';
}

$('.count').counterUp(
    {
        delay: 10,
        time: 3000,
    }
) 