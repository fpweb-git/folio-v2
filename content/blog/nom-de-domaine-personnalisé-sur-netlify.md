---
permalink: netlify-nom-de-domaine
title: Nom de domaine personnalisé sur Netlify
date: 2021-06-21T07:06:22.820Z
cover: /img/upload/netlify-cover.jpg
description: Tutoriel pour ajouter un nom de domaine hébergé sur d'autres
  serveurs que netlify.
metaTitle: Nom de domaine personnalisé sur Netlify
metaDescription: Tutoriel pour ajouter un nom de domaine hébergé sur d'autres
  serveurs que netlify.
---
## Ajouter son nom de domaine

Dans cette exemple nous allons voir comment ajouter un nom de domaine hébergé chez google domain ( fonctionne sur tous les hébergeurs ) sur un site qui lui est hébergé chez netlify.

### *Première étape*

Cliquer sur "set up a custom domain".

![Netlify domaine personnalisé étape 1](/img/upload/netlify-screen-1.jpg)

Ajoutez ensuite votre nom de domaine et cliqué sur "yes, add domain".

![Netlify domaine personnalisé étape 2](/img/upload/netlify-screen-2.jpg)

### *Seconde étape*

Cliquez sur "Check Dns configuration".

![Netlify domaine personnalisé étape 3](/img/upload/netlify-screen-3.jpg)

Pour faire au mieux et au plus simple nous allons utiliser les serveurs DNS de netlify, pour cela cliquez sur lien dans la partie "Use Netlify DNS"

![Netlify domaine personnalisé étape 4](/img/upload/netlify-screen-4.jpg)

On vous redemande ensuite de vérifier votre domaine.

![Netlify domaine personnalisé étape 5](/img/upload/netlify-screen-5.jpg)

Ensuite, vous pouvez ajouter d'autres records, ici nous n'en avons pas besoin on clique simplement sur "continue".

![Netlify domaine personnalisé étape 6](/img/upload/netlify-screen-6.jpg)

Ici Netlify va vous donner 4 adresses à venir ajouter au nom de serveur de votre domaine.

![Netlify domaine personnalisé étape 7](/img/upload/netlify-screen-7.jpg)

### *Troisième étape*

Rendez-vous sur votre hébergeur de domaine et venez coller les adresses préalablement obtenues sur Netlify.

<p class="note">J'utilise Google domain mais chaque hébergeur dispose d'un endroit pour modifier ses noms de serveurs !</p>

![Netlify domaine personnalisé étape 8](/img/upload/netlify-screen-8.jpg)

### *Dernière étape*

Attendre ! Le temps que les DNS se propagent, il faut parfois attendre 24h. Un fois propagés vous aurez deux petites icônes vertes "netlify DNS".

<p class="note">Si cela ne se fait pas automatiquement vous pouvez demander votre certificat SSL (https), en cliquant sur "verify DNS configuration".</p>

![Netlify domaine personnalisé étape 9](/img/upload/netlify-screen-9.jpg)

J'espère que ce petit tuto vous aura aidé !