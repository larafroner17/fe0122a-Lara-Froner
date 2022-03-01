// Quando il documento è pronto...
$(document).ready(function(){
    $("h2").click(function(evt){
        


       let titoliH2 = $(evt.currentTarget);
       $(titoliH2).toggleClass("meno");


       if(titoliH2.hasClass("meno")){
           $(titoliH2).next().show();


       }else{
        $(titoliH2).next().hide();
           
       }


    })


})


    
        


        // utilizza il prepreventDefault() per prevenire che il gestore eventi di default sia eseguito.
    

    // imposta il focus sul primo tag ancor dell'h2
