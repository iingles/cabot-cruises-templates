$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false,
    })
   
    // Responsive menu button
    $('#hamburgerBtn').click(()=> {
        $("#hamburgerBtn").toggleClass("open")
        $("#primaryNav").toggleClass("open")
    })
     
})