$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.box-filme').click(function(e) {
    e.preventDefault();
    desc = $(this).attr('data-desc');
    title = $(this).attr('alt');
    img = $(this).attr('src');
    console.log(desc + " " + title);
    $('.filme-principal .container .titulo').text(title);
    $('.filme-principal .container .descricao').text(desc);
    $('.filme-principal').css('background', 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.70)100%), url(' + img + ')');
    $('.filme-principal').css('background-size', 'contain');
    $('.filme-principal').css('background-repeat', 'no-repeat');
    $('.filme-principal').css('background-position', 'top center');
  });
