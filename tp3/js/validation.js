$( document ).ready(function() {
    console.log( "DOM ready!" );

    $("#envoyer").on("click",function(event){ 
       event.preventDefault(); 
       console.log( "click" ); 

       if ($('#nom').val().length < 5 || $('#nom').val() == "") { 
           
       
       $('#myModal').modal("show");
       $(".modal-title").text("Message erreur");
       $(".modal-body").text("veuillez renseignez le  nom");
     }
     else if ($('#prenom').val().length < 5 || $('#prenom').val() == "") { 
       $('#myModal').modal("show");
       $(".modal-title").text("Message erreur");
       $(".modal-body").text("veuillez renseignez le  prenom");
   }
   
   else if ( $('#date').val() == "") { 
       $('#myModal').modal("show");
       $(".modal-title").text("Message erreur");
       $(".modal-body").text("veuillez renseigner la date de naissance");
   }


   else if ($('#adress').val().length < 5 || $('#adress').val() == "") { 
       $('#myModal').modal("show");
       $(".modal-title").text("Message erreur");
       $(".modal-body").text("veuillez renseigner l'adresse");
   }
   else if ($('#mail').val().length < 5 || $('#mail').val() == "") { 
       $('#myModal').modal("show");
       $(".modal-title").text("Message erreur");
       $(".modal-body").text("veuillez renseigner l'adresse mail");
   }
   else {

  

       $('#myModal').modal("show");
       $(".modal-title").text( "Bienvenue  "+ document.querySelector("#nom").value+" "+ document.querySelector("#prenom").value);
    
       
      
       $(".modal-body").html( "vous etes nés le  "+ document.querySelector("#date").value+"</br> et vous habitez à :"+'<img src="https://maps.googleapis.com/maps/api/staticmap?markers='+document.querySelector("#adress").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>');
      
   }
    // Y mettre le code jQuery pour valider tous les champs du formulaire

}); 
});




/*$( document ).ready(function() {

     console.log( "DOM ready!" );
     



     // Y mettre le code jQuery pour valider tous les champs du formulaire

 $(".champ").keyup(function(){
    if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
        $(this).css({ // on rend le champ rouge
            borderColor : 'red',
	    color : 'red'
        });
     }
     else{
         $(this).css({ // si tout est bon, on le rend vert
	     borderColor : 'green',
	     color : 'green'
	 });
     }
});

function verifier(champ){

    if(champ.val() == ""){ // si le champ est vide

        $erreur.css('display', 'block'); // on affiche le message d'erreur

        champ.css({ // on rend le champ rouge

            borderColor : 'red',

            color : 'red'

        });

    }

}
$envoi.click(function(e){

    e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi


    // puis on lance la fonction de vérification sur tous les champs :

    verifier($nom);

    verifier($prenom);

    verifier($confirmation);

    
    verrifier($date);
    verifier($adress);
   
    verifier($mail);

});
$reset.click(function(){

    $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS

        borderColor : '#ccc',

        color : '#555'

    });

    $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur

});
function verifier(champ){

    if(champ.val() == ""){ // si le champ est vide

        $erreur.css('display', 'block'); // on affiche le message d'erreur

        champ.css({ // on rend le champ rouge

            borderColor : 'red',

            color : 'red'

        });

    }

}
$('#myModal').modal("show");
});*/




