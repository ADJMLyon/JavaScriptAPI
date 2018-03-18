## Introduction

### Objectifs de la veille technologique

L'objectif de ce document est mettre en lumière les diverses API Javascript permettant d'accéder au matériel depuis un navigateur sur des dispositifs mobiles comme les smartphones ou tablettes, de prendre conscience de leur potentiel et de les illustrer par des exemples d'applications.

### Cadre de la veille technologique

HTML5, dernière version majeure de HTML, est sorti en octobre 2014 avec de nombreuses nouvelles API. Comme nouveautés, nous pouvons lister entre autre :
* une API de dessin 2D utilisée avec la nouvelle balise `canvas`,
* une API pour jouer des vidéos et des sons/musiques utilisée avec les nouvelles balises `video` et `audio`,
* l'intégration d' API tierces telles que WebGL du Khronos Group permettant d'ajouter aux pages du contenu 3D.

Une API, ou Application Programming Interface, peut être définie comme étant une *façade* par laquelle un logiciel donne accès à son potentiel à d’autres logiciels. Cela peut être : donner accès à des données, à des logiciels, des processus etc...

JavaScript, créé en 1995 par Brendan Eich, est le "langage du Web" (on dit d'ailleurs que "HTML5 = HTML5 + CSS3 + JS"). Il s'agit d'un langage de script orienté objet. Il est principalement utilisé dans le but d'améliorer l'ergonomie d'une page web et/ou d'une UI, de dynamiser une page Web, d'interagir avec le HTML. Le navigateur web prend en charge l'exécution de ces scripts.

## Présentation de JavaScript

Afin de bien cerner les enjeux de la veille et du tour d'horizon sur les API JavaScript qui suivra, faisons une rapide présentation du langage concerné ici.

### Un langage très populaire du fait de sa polyvalence

JavaScript est le langage le plus populaire au monde, comme le montre le graphique suivant :

<table align="center" border="0">
  <tr>
    <td>
      <img src="img/popular-languages.jpg" style="width: 500px;">
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Nombre de <i>pull requests</i> sur GitHub par langages en 2017
    </td>
  </tr>
</table>

En effet, le nombre de pull requests concernés par des scripts JavaScript est largement plus élévé que pour les autres langages en 2017.
JavaScript est très populaire grâce au fait qu'il reste encore de nos jours le langage du Web, malgré l'émergence d'autres langages. De plus, sa popularité a été amplifiée grâce à la création de [node.js](https://nodejs.org/en/) permettant l'utilisation JavaScript côté serveur. La simplicité et la vitesse de node.js lui a permis d'être utilisé par bon nombre de start-up par exemple.

Ainsi, JavaScript est un langage complet, utilisé autant côté client (front-end, côté navigateur, avec des frameworks tels qu'[Angular](https://angular.io/) ou côté application mobile avec [Cordova](https://cordova.apache.org/)) que côté serveur comme nous l'avons mentionné plus haut.

### Hello World!

Afin d'illustrer la notion d'API JavaScript, regardons l'exemple d'un "Hello World!" dans ce langage.
La façon classique de faire un "Hello World!" en JavaScript est en utilsant un `alert` dans une balise `script` d'un document HTML :

```html
<!DOCTYPE HTML>
<html>

<body>

  <script>
    alert( 'Hello, world!' );
  </script>

</body>

</html>
```

En lançant le document dans un navigateur, une popup nous indique "Hello, world!".

Nous allons voir une autre approche. Nous allons modifier le DOM, en utilisant l'API JavaScript permettant de le manipuler.

```html
<!DOCTYPE HTML>
<html>

<body>

  <div id="display"></div>

  <script>
    document.getElementById('display').innerHTML = 'Hello World!'
  </script>

</body>

</html>
```

Ici, le "Hello World!" n'apparaitra pas dans une popup comme précedemment mais sur la page elle-même. Ici, grâce à l'API JavaScript permettant de manipuler le DOM, on accède à l'élément HTML ayant pour `id` "display", puis on déclare sa valeur interne (`innerHTML`). Nous verrons plus tard que l'objet `document` sera encore utilisé et qu'il donne accès à d'autres API.

## Les APIs Javascript pour accéder au matériel

Maintenant que nous avons succinctement présenté le langage JavaScript, faisons à présent un tour d'horizon des API JavaScript permettant d'accéder au matériel des dispositifs mobiles depuis un navigateur Web tel que Chrome Android, iOS Safari etc...

#### L'API de géolocalisation

##### Principe

Cette API donne des informations à propos de la position de l’utilisateur. L'objet `document.geolocation` a une fonction `getCurrentPosition` permettant d'accéder aux données relatives à la position de l'utilisateur grâce au GPS du smartphone ou tablette. On accède ainsi au matériel du dispositif. Dans le cas de la géolocalisation, il est néanmoins possible d'avoir la position de l'utilisateur sans passer par le GPS : s'il est connecté en Wi-Fi, on peut accéder à la position du *hotspot*. Voici un exemple d'utilisation de la fonction `getCurrentPosition` :

```html
// Récupérons la localisation.
navigator.geolocation.getCurrentPosition(function(position) {
    // Récupérons les coordonnées associée à la localisation actuelle de l'utilisateur.
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Une action intéressante ...
});
```

Le *callback* de `getCurrentPosition` permet d'accéder à la variable `position`, qui est un objet contenant notamment les coordonnées récupérées.

##### Compatibilité

L'API de géolocalisation est l'une des plus utilisées. Ainsi, de nombreux navigateurs la supporte, comme nous pouvons le constater sur le *caniuse* suivant :

<table align="center" border="0">
  <tr>
    <td>
      <a href="https://caniuse.com/#feat=geolocation" target="new"><img src="img/caniuse-geo.jpg" style="width: 700px;"></a>
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Compatibilité de l'API de géolocalisation sur divers navigateurs mobiles
    </td>
  </tr>
</table>

Nous pouvons alors constater la possibilité d'utiliser cette API sur toutes les versions de tous les navigateurs mobiles courants à l'exception d'Opera Mini. Notons néanmoins que s'il y a un `1` en haut à gauche d'une version, cela signifie que l'API ne peut être utilisée que sur des serveurs sécurisées en https.
Il est toujours bon de vérifier l'existance de l'objet `document.geolocation` avant de l'utiliser :

```html
// Vérifions si le navigateur Web supporte l'API de géolocalisation.
if (navigator.geolocation) {

} else {
  // Si ce n'est pas le cas, on informe l'utilisateur.
  document.write('Your browser does not support GeoLocation');
}
```

##### Exemple avec Google Maps

Le code suivant permet d'utiliser l'API de géolocalisation puis d'afficher la position sur une carte Google Maps grâce à l'API fournie :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Geolocation</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
  </body>
</html>
```

La ligne `<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>` permet d'utiliser l'API Google. Nous pouvons reconnaître le bloc utilisant l'API de géolocalisation :

```html
// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
```

Si le navigateur supporte l'API de géolocalisation, on envoie les coordonnées de l'utilisateur à `infoWindow`.

#### L'API d'orientation et de mouvement

##### Principe

Il est possible d'accéder aux informations concernant les angles d’orientation du dispositif mobile par une API. Celle-ci permet de détecter les changements de valeurs de divers angles définis sur un smartphone. Il s'agit des angles *alpha*, *beta* et *gamma*. Il sont définis comme suit :

<table align="center" border="0">
  <tr>
    <td>
      <img src="img/orient-alpha.jpg" style="width: 550px;">
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Illustration de l'angle <i>alpha</i> dans le répère de coordonnées d'un smartphone
    </td>
  </tr>
</table>

L'angle *alpha* est la rotation suivant l'axe z. Il vaut 0° lorsque l'appareil est dirigé vers le Nord, et augmente lorsque l'on tourne celui-ci dans le sens anti-horaire.

<table align="center" border="0">
  <tr>
    <td>
      <img src="img/orient-beta.jpg" style="width: 550px;">
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Illustration de l'angle <i>beta</i> dans le répère de coordonnées d'un smartphone
    </td>
  </tr>
</table>

L'angle *beta* est la rotation suivant l'axe x. Il vaut 0° lorsque le haut et le bas de l'appareil sont à équidistance par rapport à la surface de la Terre, et augmente lorsque l'on incline le haut de celui-ci en direction du sol.

<table align="center" border="0">
  <tr>
    <td>
      <img src="img/orient-gamma.jpg" style="width: 550px;">
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Illustration de l'angle <i>gamma</i> dans le répère de coordonnées d'un smartphone
    </td>
  </tr>
</table>

L'angle *beta* est la rotation suivant l'axe y. Il vaut 0° lorsque les côtés droite et gauche de l'appareil sont à équidistance par rapport à la surface de la Terre, et augmente lorsque l'on incline le côté droit de celui-ci en direction du sol.

Cette API utilise le gyroscope et le compas de l'appareil. L’évènement `deviceorientation` permet de récupérer les valeurs des angles, comme suit :

```html
// Vérfions si le navigateur supporte DeviceOrientationEvent.
if (window.DeviceOrientationEvent) {
  // Création d'un eventListener.
  window.addEventListener('deviceorientation', function(event) {
    // Récupération de l'angle gamma.
    var tiltLR = event.gamma;

    // Récupération de l'angle beta.
    var titleFB = event.beta;

    // Récupération de l'angle alpha.
    var direction = event.alpha;
  });
}
```

Ici, on ajoute un eventListener à l'objet `window` permettant de détecter les changements sur l'évènement `deviceorientation`. Lorsque une valeur relative à cet évènement change, on peut accéder à ses informations via la fonction de callback. Celle-ci donne accès à une variable, ici `event`, par laquelle on peut accéder aux valeurs des angles *alpha*, *beta* et *gamma*.

L'API de mouvement utilise l’accéléromètre de la machine, pour détecter les mouvements de celle-ci selon le répère X, Y, Z, défini comme suit :

<table align="center" border="0">
  <tr>
    <td>
      <img src="img/coord.jpg" style="width: 550px;">
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Illustration du répère cartésien du smartphone
    </td>
  </tr>
</table>

 L’évènement `devicemotion` est utilisé pour récupérer les informations relatives à un changement dans les valeurs d'accélération suivant les axes du répère.

 ```html
if(window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", process, false);
} else {
  // Le navigateur ne supporte pas l'événement devicemotion
}

function process(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  // Faisons quelque chose de génial !
}
```

L'objet `event` renvoie plusieurs propriétés comme par exemple ici `accelerationIncludingGravity` renvoyant la valeur de l'accélération brute, retournée par l'accéléromètre. Il y a aussi les propriétés `acceleration`, renvoyant l'accélération calculée par l'appareil en enlevant la gravité, ou encore `rotationRate`, renvoyant les taux de rotation de l'appareil suivant les trois axes.

##### Compatibilité

L'API d'orientation et de mouvement n'est hélas pas totalement supporté par la plupart des navigateurs comme nous pouvons le voir sur le *caniuse* suivant :

<table align="center" border="0">
  <tr>
    <td>
      <a href="https://caniuse.com/#feat=deviceorientation" target="new"><img src="img/caniuse-orient.jpg" style="width: 700px;"></a>
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Compatibilité de l'API d'orientation et de mouvement sur divers navigateurs mobiles
    </td>
  </tr>
</table>

Nous constatons alors que pour la quasi-totalité des navigateurs cette API est *partiellement* supportée. Cela veut dire qu'il subsiste des difficultés dans certains cas. Ici, le support partiel est dû à un manque par rapport à l'évènement `compassneedscalibration`, qui est l'un des trois évènements de `DeviceMotionEvent` avec `devicemotion` et `deviceorientation` que nous avons vu précedemment. Ainsi, nous pouvons considérer que cette API est bien supportée pour presque tous les navigateurs.

##### Exemples d'applications

De nombreuses applications sont possibles grâce à cette API. En lien avec l'API de géolocalisation, il est possible d'utiliser l'API d'orientation et de mouvement afin de connaître la direction de l'utilisateur ou encore sa vitesse. Cette API peut être utilisée pour mettre à jour des données, lancer des actions suivant le mouvement fait par l'utilisateur avec son smartphone par exemple. Le `devicemotion` est utile aussi pour des utilisations liée à des applications de santé ou de fitness. Elle est aussi utilisable dans le cadre de petits jeux videos. Un exemple d'une telle application est détaillée sur ce [lien](https://developer.mozilla.org/en-US/Apps/Fundamentals/gather_and_modify_data/responding_to_device_orientation_changes). Il s'agit du jeu du *rolling-ball*. En faisant bouger l'appareil, la balle bouge; l'objectif étant de la placer dans le trou.

<table align="center" border="0">
  <tr>
    <td>
      <a href="https://developer.mozilla.org/en-US/Apps/Fundamentals/gather_and_modify_data/responding_to_device_orientation_changes" target="new"><img src="img/rolling-ball.png" style="width: 700px;"></a>
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Compatibilité de l'API d'orientation et de mouvement sur divers navigateurs mobiles
    </td>
  </tr>
</table>

#### L'API de vibration

##### Principe

L'API de vibration permet, comme son nom l'indique, de faire vibrer la machine, d’envoyer un signal non sonore à un utilisateur. L'objet `navigator` possède une fonction `vibrate` permettant de faire vibrer la machine suivant les arguments passés à cette fonction.

```html
// Vibre une fois durant 1s (1000 ms).
navigator.vibrate(1000);

// Vibre "en séquence". Vibre pendant 3s, puis pause pendant 2s et enfin vibre à nouveau pendant 1s.
navigator.vibrate([3000, 2000, 1000]);
```

Il possible d'arrêter une vibration en cours via ces deux méthodes :

```html
navigator.vibrate(0);
navigator.vibrate([]);
```

Il possible d'effectuer des vibrations en continu grâce à l'utilisation de `setInterval`.

```html
var vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
	navigator.vibrate(duration);
}

// Stops vibration
function stopVibrate() {
	// Clear interval and stop persistent vibrating
	if(vibrateInterval) clearInterval(vibrateInterval);
	navigator.vibrate(0);
}

// Start persistent vibration at given duration and interval
// Assumes a number value is given
function startPeristentVibrate(duration, interval) {
	vibrateInterval = setInterval(function() {
		startVibrate(duration);
	}, interval);
}
```

##### Compatibilité
