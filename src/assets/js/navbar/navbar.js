

$(document).ready(function () {
    $(document).on('click', '.cta', function () {
        $(this).toggleClass('activo')


    })
});


$(document).ready(function(){
    $(".hamburger").click(function(){
        $('.menu-lateral').removeClass("flowHide");  
        $(".menu-lateral").toggleClass("abrir-barra-lateral");
        $('.link-nav-nombre').toggleClass('nombre-oculto');       
    });

});


$(document).ready(function(){
     $(".textos").hide();

    var estado = 0;
    $(".hamburger").click(function(){

        if(estado == 0){
            $("#logo").show();
            $(".textos").show();
            estado = 1;
        }else{
            estado = 0;
            $("#logo").hide();    
            $(".textos").hide();

        }
        
    });

});



$(document).ready(function(){

    var estado = 0;
    $(".admin").click(function(){

        if(estado == 0){
            $(".admin-accion").show();
            estado = 1;
        }else{
            estado = 0;
            $(".admin-accion").hide();    
        }
        
    });

});


 $(document).ready(
     function () {    
      $(".nav-link").hover(function () {           
          $('.menu-lateral').removeClass("flowHide");  
          $(this).addClass('barra-activa');

      }, 
      function () {
          $('.menu-lateral').addClass("flowHide");
          $(this).removeClass('barra-activa');
      });    
  });

















