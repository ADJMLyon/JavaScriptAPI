window.onload = function() {

  // Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);

  if (navigator.getUserMedia) {
    // Utilisation de la caméra.
    navigator.getUserMedia(
        // Le premier argument de la fonction est un objet avec les options voulues.
        {
            video: true
        },
        // Fonction de callback, si l'appel est un succès.
        function(localMediaStream) {
            var vid = document.getElementById('camera-stream');

            // Création d'un objet URL pour le vidéo stream.
            vid.src = window.URL.createObjectURL(localMediaStream);
        },
        // Fonction de callback d'erreur.
        function(err) {
            console.log('The following error occurred when trying to use getUserMedia: ' + err);
        }
    );
  } else {
    alert('Sorry, your browser does not support getUserMedia');
  }

}
