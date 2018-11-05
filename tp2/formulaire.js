function validation (){

    if(validationItem('nom')){
        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#nom").value
    }
/*
    if(document.getElementById("nom").value=="" & document.getElementById("prenom").value=="" 
    & document.getElementById("date").value=="" & document.getElementById("adress").value==""
    & document.getElementById("mail").value==""){
        document.getElementById("section-2").innerHTML ="la saisie de tous les champs est obligatoire "
    }
    else if(document.getElementById("nom").value.length<5 & document.getElementById("prenom").value.length<5
         & document.getElementById("date").value.length<5  & document.getElementById("adress").value.length<5 &
         document.getElementById("mail").value.length<5){
            document.getElementById("section-2").innerHTML ="ce champ doit contenir aumoin 5 caractéres  "
        }
    else {
        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#nom").value
    }*/

}

function validationItem(_id){
    var label = document.querySelector('label[for="'+_id+'"]').textContent;
    if(document.getElementById(_id).value=="" ){
        document.getElementById("section-2").innerHTML ="ce champ "+label+" est obligatoire  "
        return false;
    }
    if(document.getElementById(_id).value.length<5 ){
        document.getElementById("section-2").innerHTML ="ce champ "+label+" doit contenir au moin 5 caractéres  "
        return false;
    }
    return true;
}