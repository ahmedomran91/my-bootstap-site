// smooth scroll function
$('.list a').click(function(){
    $('body,html').animate({
        scrollTop:$($(this).attr('href')).offset().top
    },800)
})
// scrool to top button function
 $('.scrollTop').click(function(){
     $('body,html').animate({
         scrollTop:0
     },800)
 })
