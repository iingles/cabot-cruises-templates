$(document).ready(function(){
    $('.carousel').slick({
        //options
    })
   
    // Responsive menu button
    $('#hamburgerBtn').click(()=> {
        $("#hamburgerBtn").toggleClass("open")
        $("#primaryNav").toggleClass("open")
    })
     
})