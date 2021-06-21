---
permalink: carte-leaflet
title: Carte interactive tuto Leaflet
date: 2021-06-21T07:03:13.125Z
cover: /img/upload/leaflet-cover.jpg
description: Petit projet simple pour créer une carte interactive avec Leaflet
  et des données au format Geojson. On va y ajouter des marqueurs personnalisés
  et une fonction pour filtrer nos différents restaurants !
metaTitle: Carte interactive tuto Leaflet
metaDescription: Projet simple pour créer une carte interactive avec Leaflet et
  des données au format Geojson. On va ajouter des marqueurs personnalisés et
  une fonction pour filtrer nos différents restaurants.
---
## Obtenir des données Geojson

Avant de créer notre carte il nous faut le contenu. Dans cette exemple j'ai utilisé le site  <a href="https://geojson.io" target="_blank" rel="noopener">geojson.io</a>,
j'ai placé mes marqueurs et j'ai ajouté 3 propriétés supplémentaires "name", "type", "adress".
On va pouvoir utiliser ces propriétés pour notre filtre et afficher les informations relatives à chaque marqueur.

Je crée donc un nouveau projet et j'ajoute à la racine un fichier .json dans lequel je viens coller mes données.

Voici donc à quoi ressemble ce format, on peut voir une liste d'objet nommé "features" qui correspond à nos marqueurs et leurs informations.

```json
{
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"name": "restaurant népalais",
				"type": "nepal",
				"adress": "14 rue exemple"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [2.3291015625, 48.80686346108517]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "restaurant italien",
				"type": "italie",
				"adress": "12 rue exemple"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-1.0986328125, 46.14939437647686]
			}
		}
	]
}
```

## Le HTML et le CSS

Maintenant que nous avons notre fichier JSON on va commencer à créer notre carte.\
Pour ajouter la librairie, on va simplement utiliser un CDN.

On vient ensuite créer notre fichier css et notre fichier javascript.\
Je passe l'étape du html et du css et je vous mets le code juste ici :

### HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaflet</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="mapcontainer">
        <div id="mapid"></div>
        <div class="filter">
            <input type="radio" id="all" name="type" value="all">
            <label for="all">Tous les restaurants</label><br>
            <input type="radio" id="italie" name="type" value="italie">
            <label for="italie">Restaurants italiens</label><br>
            <input type="radio" id="nepal" name="type" value="nepal">
            <label for="nepal">Restaurants népalais</label><br>
        </div>
    </div>

</body>
<script src="map.js"></script>
</html>
```

### CSS

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.mapcontainer{
    width: 100vw;
    height: 100vh;
    position: relative;
}

#mapid{
    width: 100%;
    height: 100%;
}

.filter{
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 1000;
    padding: 1rem;
}
```

<p class="note">À ce stade-là vous ne verrez pas apparaitre votre carte, c'est tout à fait normal !</p>

## Le Javascript

Rentrons maintenant dans le vif du sujet, commençons par afficher notre carte et nos marqueurs.

<p class="note">Voici le lien de la documention de <a href="https://leafletjs.com/" target="_blank" rel="noopener">leaflet</a></p>

Première étape définir notre carte et la tile (fond de carte)

```javascript
const mymap = L.map('mapid',{
    minZoom : 4,
    zoomControl : false,
})

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

L.tileLayer(tileUrl, { 
    attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 20,
    zoomOffest: -1,
}).addTo(mymap)
```

<p class="note">Ne pas oublier l'attribution ! pour obtenir des tiles gratuites <a href="http://leaflet-extras.github.io/leaflet-providers/preview/index.html" target="_blank" rel="noopener"> ici</a></p>

Je viens ensuite créer mes marqueurs personnalisés, j'ai utilisé ici des SVG ( un pour le marqueur de base et un pour notre marqueur actif )

```javascript
const svgBlue = '<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13.5C19 16.5376 16.5376 19 13.5 19C10.4624 19 8 16.5376 8 13.5C8 10.4624 10.4624 8 13.5 8C16.5376 8 19 10.4624 19 13.5Z" fill="white"/><path d="M13.3619 39.3378C13.2153 39.5682 13.0946 39.7565 13.0036 39.898C12.9126 39.7565 12.7919 39.5682 12.6452 39.3378C12.2905 38.7806 11.7835 37.9772 11.1752 36.9925C9.95834 35.023 8.33623 32.3293 6.71445 29.4318C5.09221 26.5334 3.47258 23.4351 2.25921 20.6553C1.04034 17.863 0.25 15.4322 0.25 13.8523C0.25 9.09195 1.87241 5.70244 4.2625 3.49961C6.6568 1.2929 9.84296 0.257417 13 0.250001C16.157 0.257417 19.3432 1.2929 21.7375 3.49961C24.1276 5.70244 25.75 9.09195 25.75 13.8523C25.75 15.4322 24.9601 17.863 23.7419 20.6554C22.5293 23.4351 20.9105 26.5335 19.2892 29.4318C17.6684 32.3294 16.0472 35.0231 14.831 36.9926C14.223 37.9772 13.7164 38.7807 13.3619 39.3378ZM13.0074 8.54761C10.379 8.54761 8.25114 10.6755 8.25114 13.3039C8.25114 15.932 10.3788 18.0601 13 18.0601C15.6278 18.0601 17.7637 15.9328 17.7637 13.3039C17.7637 10.6755 15.6358 8.54761 13.0074 8.54761Z" fill="#16AFD1" stroke="white" stroke-width="0.5"/></svg>';
const baseSvg = 'data:image/svg+xml;base64,' + btoa(svgBlue);

const svgDark = '<svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13.5C19 16.5376 16.5376 19 13.5 19C10.4624 19 8 16.5376 8 13.5C8 10.4624 10.4624 8 13.5 8C16.5376 8 19 10.4624 19 13.5Z" fill="white"/><path d="M13.3619 39.3378C13.2153 39.5682 13.0946 39.7565 13.0036 39.898C12.9126 39.7565 12.7919 39.5682 12.6452 39.3378C12.2905 38.7806 11.7835 37.9772 11.1752 36.9925C9.95834 35.023 8.33623 32.3293 6.71445 29.4318C5.09221 26.5334 3.47258 23.4351 2.25921 20.6553C1.04034 17.863 0.25 15.4322 0.25 13.8523C0.25 9.09195 1.87241 5.70244 4.2625 3.49961C6.6568 1.2929 9.84296 0.257417 13 0.250001C16.157 0.257417 19.3432 1.2929 21.7375 3.49961C24.1276 5.70244 25.75 9.09195 25.75 13.8523C25.75 15.4322 24.9601 17.863 23.7419 20.6554C22.5293 23.4351 20.9105 26.5335 19.2892 29.4318C17.6684 32.3294 16.0472 35.0231 14.831 36.9926C14.223 37.9772 13.7164 38.7807 13.3619 39.3378ZM13.0074 8.54761C10.379 8.54761 8.25114 10.6755 8.25114 13.3039C8.25114 15.932 10.3788 18.0601 13 18.0601C15.6278 18.0601 17.7637 15.9328 17.7637 13.3039C17.7637 10.6755 15.6358 8.54761 13.0074 8.54761Z" fill="#307199" stroke="white" stroke-width="0.5"/></svg>';
const activeSvg = 'data:image/svg+xml;base64,' + btoa(svgDark);

const activeIcon = new L.Icon({
    iconUrl: activeSvg,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const baseIcon = new L.Icon({
    iconUrl: baseSvg,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
```

<p class="note">Retrouvez la documentation pour définir les marqueurs juste <a href="https://leafletjs.com/reference-1.7.1.html#icon" target="_blank" rel="noopener">ici</a></p>

Maintenant on va venir créer 2 variables que nous laissons pour l'instant vide.

```javascript
let clickedMarker;
let geojson; 
```

Comme leurs noms l'indiquent, ici on va venir stocker les informations du marqueur qui a été cliqué et nos données récupérées à partir de notre fichier JSON.

Maintenant allons récupérer nos données avec la méthod fetch().

```javascript
fetch('./geojson-data.json')
.then(response => response.json())
.then(data => {
    geojson = data
.catch(err => console.log(err))
```

À partir de là on va venir ajouter nos données sur la carte et les séparer en différent Layer pour pouvoir les filtrer ( on reste dans notre .then).

```javascript
const allRestaurant = L.geoJson(geojson, {
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
})
    
    const nepalRestaurant = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.type == "nepal";
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
})
    
    const italianRestaurant = L.geoJson(geojson, {
        filter: function(feature, layer) {
            return feature.properties.type == "italie";
        },
        pointToLayer : function(geoJsonPoint, latlng){
                return L.marker(latlng,{
                icon : baseIcon,
                });
        },
        onEachFeature : eachFeatureCode,
})

allRestaurant.addTo(mymap)

mymap.fitBounds(allRestaurant.getBounds(),{
        maxZoom : 6
})
```

<p class="note">Nous allons définir "eachFeatureCode" juste après, c'est ce qui va nous permettre d'interagir avec nos layer !</p>

Voici le <a href="https://leafletjs.com/reference-1.7.1.html#geojson" target="_blank" rel="noopener">lien</a> pour utiliser Leaflet avec des données au format Geojson.

Ici on vient prendre nos données et on les sépare en 3 différents Layer : tous les restaurants, les restaurants italiens et les restaurants népalais.\
On définit ensuite l'icône utilisée pour chaque marqueur puis on vient les ajouter au lancement à notre layer qui affiche tous les restaurants.\
Ensuite, on vient définir la vue de notre carte en utilisant la fonction fitBounds qui permet de centrer automatiquement la carte par rapport à nos marqueurs, plus d'info juste <a href="https://leafletjs.com/reference-1.7.1.html#bounds" target="_blank" rel="noopener">ici</a>

On vient définir notre "onEachFeature".

```javascript
const eachFeatureCode = function(feature, layer){
        if(feature.geometry.type === 'Point'){
            layer.on('click', function(e){
                if(clickedMarker){
                    clickedMarker.setIcon(baseIcon);
                }
                e.target.setIcon(activeIcon);
                clickedMarker = e.target;
            })
        }
        const content = `
        <h2>${feature.properties.name }</h2>
        <p>${feature.properties.adress }<p>
        ` 
        layer.bindPopup(content);
}
```

Cette constante va venir s'appliquer à toutes les features que l'on a définis auparavant dans nos différents layer.\
Ici si l'utilisateur clique sur un marqueur, on va venir définir notre marqueur actif en le plaçant dans notre variable "clickedMarker" créée auparavant.\
Ensuite, on détermine le contenu de notre popup et on l'ajoute à notre layer !

Et pour finir, on fait fonctionner notre système de filtre :

```javascript
const filterAll = document.getElementById("all");
    filterAll.checked = true
    filterAll.addEventListener('change', function(){
        mymap.addLayer(allRestaurant)
        mymap.removeLayer(italianRestaurant)
        mymap.removeLayer(nepalRestaurant)
    })

    const filterItalie = document.getElementById("italie");
    filterItalie.addEventListener('change', function(){
        mymap.addLayer(italianRestaurant)
        mymap.removeLayer(allRestaurant)
        mymap.removeLayer(nepalRestaurant)
    })

    const filterNepal = document.getElementById("nepal");
    filterNepal.addEventListener('change', function(){
        mymap.addLayer(nepalRestaurant)
        mymap.removeLayer(italianRestaurant)
        mymap.removeLayer(allRestaurant)
    })
```

Ici, on vient définir notre premier bouton comme checké par défaut, puis pour chaque changement sur nos input on vient ajouter ou retirer nos différents layers !

## Le résultat

<iframe title="carte intéractive leaflet" src="https://fpweb-git.github.io/leaflet-article/index.html" width="100%" height="450" frameborder="0"></iframe>

Et voilà, j'espère que ce petit tuto vous aura aidé !

Le <a href="https://github.com/fpweb-git/leaflet-article" target="_blank" rel="noopener">lien</a> vers le code source.