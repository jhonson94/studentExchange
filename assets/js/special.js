

// Israel
var modaIsrael = document.getElementById('modalLooking')
var videoIsrael = document.getElementById('israel');

modaIsrael.addEventListener('shown.bs.modal', function (event) {
    videoIsrael.play();
})

modaIsrael.addEventListener('hidden.bs.modal', function (event) {
    videoIsrael.pause();
})

// Loja
var modalLoja = document.getElementById('modalOffer')
var videoLoja = document.getElementById('loja');

modalLoja.addEventListener('shown.bs.modal', function (event) {
    videoLoja.play();
})

modalLoja.addEventListener('hidden.bs.modal', function (event) {
    videoLoja.pause();
})
