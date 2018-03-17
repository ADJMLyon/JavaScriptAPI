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
// Get the location.
navigator.geolocation.getCurrentPosition(function(position) {
    // Get the positioning coordinates.
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Do something interesting...
});
```

Le *callback* de `getCurrentPosition` permet d'accéder à la variable `position`, qui est un objet contenant notamment les coordonnées récupérées.

##### Compatibilité

L'API de géolocalisation est l'une des plus utilisées. Ainsi, de nombreux navigateurs la supporte, comme nous pouvons le constater sur le *caniuse* suivant :

<table align="center" border="0">
  <tr>
    <td>
      <img src="img/caniuse-geo.jpg" style="width: 600px;">
    </td>
  </tr>
  <tr>
    <td align="center" bgcolor="EFEFEF">
      Compatibilité de l'API de géolocalisation sur divers navigateurs mobiles
    </td>
  </tr>
</table>
