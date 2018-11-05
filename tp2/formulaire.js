function validation (){


        if (document.getElementById("nom").value == "") {
            document.getElementById("section-2").innerHTML = "La saisie du nom est obligatoire"
            document.getElementById("section-3").style.display = "none"
        }
        else if (document.getElementById("nom").value.length < 5) {
            document.getElementById("section-2").innerHTML = "le nom doit contenir au moins 5caractères "
        }
    
    
    
        else if (document.getElementById("prenom").value == "") {
            document.getElementById("section-2").innerHTML = "La saisie du prénom est obligatoire"
        }
    
        else if (document.getElementById("prenom").value.length < 5) {
            document.getElementById("section-2").innerHTML = "le prénom doit contenir au moins 5caractères "
            document.getElementById("section-3").style.display = "none"
        }
    
    
        else if (document.getElementById("date").value == "") {
            document.getElementById("section-2").innerHTML = "La séléction de votre date de naissance est obligatoire"
            document.getElementById("section-3").style.display = "none"
        }
    
    
    
    
        else if (document.getElementById("adress").value == "") {
            document.getElementById("section-2").innerHTML = "La saisie de votre adresse est obligatoire"
            document.getElementById("section-3").style.display = "none"
        }
        else if (document.getElementById("adress").value.length < 5) {
            document.getElementById("section-2").innerHTML = "l'adresse doit contenir au moins 5caractères "
            document.getElementById("section-3").style.display = "none"
        }
    
    
    
        else if (document.getElementById("mail").value == "") {
            document.getElementById("section-2").innerHTML = "La saisie du mail est obligatoire"
            document.getElementById("section-3").style.display = "none"
    
        }
        else if (document.getElementById("mail").value.length < 5) {
            document.getElementById("section-2").innerHTML = "la saisie du mail est obligatoire "
            document.getElementById("section-3").style.display = "none"
        }
    
        else {
            document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#prenom").value;
            document.getElementById("section-2").style.display = "none"
            document.getElementById("section-3").style.display = "block"
    
        }
    
    }
    
    
    

  /*  if(validationItem('nom')){
        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#nom").value
    }
     else if (validationItem('prenom')){

        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#prenom").value
        }
    else if(validationItem('date')){
        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#date").value
        }
     else if(validationItem('adress')){
        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#adress").value
        }
     else{
        document.getElementById("section-3").innerHTML = "Bienvenue " + document.querySelector("#mail").value}*/
        
    
    

    


        /*
    
    & document.getElementById("prenom").value=="" 
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



/*function validationItem(_id){
    var label = document.querySelector('label[for="'+_id+'"]').textContent;
    if(document.getElementById(_id).value=="" ){
        document.getElementById("section-2").innerHTML ="la saisie du champ "+label+" est obligatoire  "
        return false;
    }
    if(document.getElementById(_id).value.length<5 ){
        document.getElementById("section-2").innerHTML ="le champ "+label+" doit contenir au moin 5 caractéres  "
        return false;
    }
    return true;
}*/
