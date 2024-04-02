$.ajax({
  url: "http://195.154.118.169/sofyan/pompier/start.php?c=galerie&t=galeriedata",
  context: document.body
    }).done(function(data) {
      var galerieData = JSON.parse(data);
      galerieData.forEach(function(galerie) {
        var nouvelElement = `
          <div class="carousel-item">
              <img src="data:image/png;base64,${galerie.photoLink}" class="img-galerie d-block w-100 img-fluid" style="object-fit: cover; height: 550px;" alt="...">
              <div class="carousel-caption d-none d-md-block">
                  <h5>${galerie.titre}</h5>
                  <p>${galerie.description}</p>
              </div>
          </div>`;
      $(".carousel-inner").append(nouvelElement);
  });
});

$.ajax({
  url: "http://195.154.118.169/sofyan/pompier/start.php?c=engin&t=engindata",
  context: document.body
}).done(function(data) {
  var enginData = JSON.parse(data);
  var screenWidth = window.innerWidth;
  var delay = 200;
  var delayIncrement = screenWidth < 992 ? 0 : 200; 
  enginData.forEach(function(engin) {
      var nouvelEngin = `
          <div data-aos="flip-left" data-aos-delay="${delay}" class="col-lg-3">
              <div class="card-custom engins-card1 bg-base shadow-effect h-100">
                  <div class="card-custom-image engins-card2 rounded-4">
                      <img id="vsav-img" class="engins-img" src="data:image/png;base64,${engin.photoLink}">
                      <div class="card-custom-content p-4">
                          <h4>${engin.abr_nom}</h4>
                          <p>${engin.full_nom}</p>
                          <a  class="link-inter link-custom" data-bs-toggle="modal" data-bs-target="#${engin.abr_nom}Modal" style="cursor: pointer;">En savoir plus</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal fade" id="${engin.abr_nom}Modal" tabindex="-1" aria-labelledby="${engin.abr_nom}ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-modal">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">${engin.abr_nom} (${engin.full_nom})</h1>
                <button type="button" class="btn-close text-brand" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div class="modal-body">
                ${engin.description}
              </div>
            </div>
          </div>
        </div>`;
      $(".row.gy-4.engin-container").append(nouvelEngin);
      delay += delayIncrement;
  });
});

$.ajax({
  url: "http://195.154.118.169/sofyan/pompier/start.php?c=stats&t=statsdata",
  context: document.body
}).done(function(data) {
  var statsData = JSON.parse(data);
  var screenWidth = window.innerWidth;
  var delay = 200;
  var delayIncrement = screenWidth < 992 ? 0 : 200; 
  statsData.forEach(function(stats) {
      var nouvelleStats = `
        <div class="col-md-4" data-aos="fade-left" data-aos-delay="${delay}">
          <div class="statistiques p-4 bg-base shadow-effect">
            <div class="iconbox">
              <i class="${stats.icon}"></i>
            </div>
            <h1 class="mt-4 mb-2">${stats.chiffre}</h1>
            <h4>${stats.titre}</h4>
            <p>${stats.short_desc}...</p>
            <a  class="link-inter link-custom" data-bs-toggle="modal" data-bs-target="#${stats.titre}Modal" style="cursor: pointer;">En savoir plus</a>
          </div>
        </div>
        <div class="modal fade" id="${stats.titre}Modal" tabindex="-1" aria-labelledby="${stats.titre}ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-modal">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">${stats.titre}</h1>
                <button type="button" class="btn-close text-brand" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div class="modal-body">
                ${stats.long_desc}
              </div>
            </div>
          </div>
        </div>`;
      $(".row.gy-4.stats-container").append(nouvelleStats);
      delay += delayIncrement;
  });
});





