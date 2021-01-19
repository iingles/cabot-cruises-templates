$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        arrows: false,
    })
   
    // Responsive menu button
    $('#hamburgerBtn').click(()=> {
        $("#hamburgerBtn").toggleClass("open")
        $("#primaryNav").toggleClass("open")
    })
     
})