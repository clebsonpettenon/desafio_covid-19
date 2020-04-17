//Script rolagem suave
$(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
});