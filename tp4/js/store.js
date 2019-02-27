var contactStore = (function () {

    // variable privée
    var contactList = [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function () {
            var contact = {
                name: $('#name').val(),
                firstname: $('#firstname').val(),
                date: $('#birth').val(),
                adress: $('#adresse').val(),
                mail: $('#mail').val()
            };
            // ajout du contact à la liste
            contactList.push(contact);

            return contactList;
        },

        getList: function () {
            return contactList;
        }
    };
})();







  /*index.html       
  <!doctype html>
  <html>
  
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Contacts</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
      <link rel="stylesheet" href="css/bootstrap.min.css">
  
      <script src="js/jquery-3.2.1.slim.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
  
      <script src="js/store.js"></script>
      <script src="js/validation.js"></script>
      <script src="js/gps.js"></script>
  
  </head>
  
  <body>
      <div class="container">
          <h4>Ajouter un contact</h4>
          <!--Add your site or application content here -->
  
         <form id="formulaire">
              <div class="form-row">
                  <div class="form-group col-2">
                      <label for="name">Nom</label>
                  </div>
                  <div class="form-group col">
                      <input type="text" class="form-control" placeholder="" id="name">
                  </div>
                  <div id="compteur1" class="form-group col-1">
                      0 car.
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group col-2">
                      <label for="firstname">Prénom</label>
                  </div>
                  <div class="form-group col">
                      <input type="text" class="form-control" placeholder="" id="firstname">
                  </div>
                  <div id="compteur2" class="form-group col-1">
                      0 car.
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group col-2">
                      <label for="birth">Date de naissance</label>
                  </div>
                  <div class="form-group col">
                      <input type="date" class="form-control" placeholder="" id="birth">
                  </div>
                  <div class="form-group col-1">
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group col-2">
                      <label for="adresse">Adresse</label>
                  </div>
                  <div class="form-group col">
                      <input type="text" class="form-control" placeholder="" id="adresse">
  <div id="map">
                        <!--  image Google Map à mettre à jour                      
                          <img alt="map" width="300" src="https://maps.googleapis.com/maps/api/staticmap?markers=latitude,longitude&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"> -->
                      </div> 
                  </div>
                  <div class="form-group col-1">
                      <button onclick="getLocation()" class="btn btn-warning" type="button" id="gps">📍 GPS</button>
                  </div>
                  <div class="col-1">
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group col-2">
                      <label for="mail">Mail</label>
                  </div>
                  <div class="form-group col">
                      <input type="email" class="form-control" placeholder="Votre adresse mail" id="mail">
                  </div>
                  <div class="form-group col-1">
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group col">
                      <button id="valider" type="button" class="btn btn-primary">Ajouter</button>
                  </div>
              </div>
          </form>
  
  
          <div id="success"></div>
  
          
          <h4 style="display: none" id="Liste_des_contacts">Liste des contacts</h4>
  
          <table class="table table-striped table-hover" id="table" style="display: none;">
              <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Prénom</th>
                      <th>Date de naissance</th>
                      <th>Adresse</th>
                      <th>Mail</th>
                  </tr>
              </thead>
              <tbody>
  
              </tbody>
          </table>
  
  
  
  
          <div class="modal" tabindex="-1" role="dialog" id="myModal">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title">Erreur de saisie !</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <p>verrifiez que tout est bien saisie</p>
                      </div>
                      <div class="modal-footer">
                         <button type="button" class="btn btn-primary">Save changes</button> 
                          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
  
  </body>
  
  </html> */