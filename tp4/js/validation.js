
$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
    
     //ajout du compteur de nombre de caractéres pour chaque champ
            $(document).keyup(function(){
// ajout des compteurs de caractére a coté de chaque champs de saisie 
    var nombreCaractere = $("#name").val().length;
    
    var msg = nombreCaractere + ' car';
    $('#compteur1').text(msg);

    var nombreCaractere2 = $("#firstname").val().length;
    var msg2 = nombreCaractere2 + ' car';
    $('#compteur2').text(msg2);

   

            $("#valider").on("click",function store(event) { 
                event.preventDefault();
                
                    var inputNom= document.getElementById("name");
                    var inputPrenom= document.getElementById("firstname");
                    var inputDn= document.getElementById("birth");
                    var inputAdresse= document.getElementById("adresse");
                    var inputEmail= document.getElementById("mail");
                    
                    if($("#name").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
                    
                    //stocker les valeurs saisie dans le navigateur
                    localStorage.setItem("name", inputNom.value);
                    localStorage.setItem("firstname", inputPrenom.value);
                    localStorage.setItem("birth", inputDn.value);
                    localStorage.setItem("adresse", inputAdresse.value);
                    localStorage.setItem("mail", inputEmail.value);

                   $('#success').addClass("alert alert-success").text("Bravo! le formulaire est sauvegardé.");

                  $("#table").show();
                  $("#liste_des_contacts").show();
                  
                   
                   // ajout des valeurs saisie dans le tableau
                   /*
                   document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                   .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname") +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
                   }
                  
                   document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                   .innerHTML +'<tr><td>'+contactStore.getList.name.val()+'</td><td>'+localStorage.getItem("firstname") +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
                   */ 
                }
                   
                  
            });
            
            $("#gps").on("click",function() { 
                getLocation();
                
            });

            $("#valider").on("click",function() { 
                contactStore.add()

                var contactList = contactStore.getList();
                console.log(contactList)
                
                for(var index in contactList){
                    console.log(contactList[index].name);
                    document.querySelector("table tbody").innerHTML = 
                    document.querySelector("table tbody").innerHTML +
                    '<tr>'+
                        '<td>'+contactList[index].name+'</td>'+
                        '<td>'+contactList[index].firstname+'</td>'+
                        '<td>'+contactList[index].date+'</td>'+
                        '<td>'+contactList[index].adress+'</td>'+   
                        '<td><a href="https://maps.google.com/maps?q=' +contactList[index].adress+'">' + contactList[index].adress +'</a></td>'+
                        '<td>'+contactList[index].mail+'</td>'+
                    '<tr>';
                  }
            });

    

});












/*$(document).ready(function () {
    console.log("DOM ready!");

    $("#gps").on("click", function (event) {
        event.preventDefault();

        getLocation()
    });



    $(document).keyup(function () {   //rajouter le compteur nombre de caractéres à coté de chaque champ

        var nbcaract = $("#name").val().length;
        var msg = nbcaract + 'car';
        $('#compteur1').text(msg);


        var nbcaract2 = $("#firstname").val().length;
        var msg2 = nbcaract2 + 'car';
        $('#compteur2').text(msg2);



      
    });
    // Y mettre le code jQuery pour valider tous les champs du formulaire


    $("#valider").on("click", function store(event) {
        event.preventDefault();

        var inputNom = document.getElementById("name");
        var inputPrenom = document.getElementById("firstname");
        var inputDn = document.getElementById("birth");
        var inputAdresse = document.getElementById("adresse");
        var inputEmail = document.getElementById("mail");

        if ($("#name").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" && $("#adresse").val() !== "" && $("#mail").val() !== "") {

            //stocker les valeurs saisie dans le navigateur
            localStorage.setItem("name", inputNom.value);
            localStorage.setItem("firstname", inputPrenom.value);
            localStorage.setItem("birth", inputDn.value);
            localStorage.setItem("adresse", inputAdresse.value);
            localStorage.setItem("mail", inputEmail.value);

            $('#success').addClass("alert alert-success").text("formulaire sauvegardé.");

            $("#table").show();
            $("#liste_des_contacts").show();


            // ajout des valeurs saisie dans le tableau

            document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                .innerHTML + '<tr><td>' + localStorage.getItem("name") + '</td><td>' + localStorage.getItem("firstname") + '</td><td>' + localStorage.getItem("birth") + '</td><td><a href="https://maps.google.com/maps?q=' + localStorage.getItem("adresse") + '">' + '</td><td>' + '</a></td><td><a href=mailto:>' + localStorage.getItem("mail") + '</a></td>';
        }

        


 });*/

    });






