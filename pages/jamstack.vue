<template>
    <main class="content-container px-4 py-10 sm:py-20">
        <span class="inline-block text-lg text-blue font-semibold mb-4">Explication</span>
        <h1 class="text-3xl md:text-5xl font-extrabold max-w-xl mb-10">Qu’est ce que la Jamstack ?</h1>
        <p>
            Le terme Jamstack ne concerne pas une technologie en particulier. Il s'agit d'une architecture de développement Web moderne qui met l'accent sur l'utilisation de CDN et le fait de découpler différents services pour obtenir des sites très performants et sécuriser.
        </p>
        <img class="mx-auto mt-14 mb-10" src="~/static/img/jamstack-schema.png" alt="développement web architecture jamstack" width="600" height="350">
        <img class="mx-auto" src="~/static/img/standard-schema.png" alt="développement web architecture stantard" width="600" height="350">
        
        <h2>Que veux dire Jamstack ?</h2>
        <p>Le mot Jamstack peut se séparer en deux parties “JAM” signifie JAVASCRIPT | API | MARKUP et STACK pour l’ensemble des technologies utilisé.</p>
        <h3>JAVASCRIPT</h3>
        <p>
            Le langage de programmation du Web, JavaScript, fournit les éléments dynamiques sur les sites, coupler avec des frameworks moderne comme React, Vue ou Angular le développement devient plus rapide et fiable.
        </p>
        <p>
            JavaScript est ensuite utilisé avec des API pour communiquer avec les différents services externes afin d’enrichir le site.
        </p>
        <h3>API</h3>
        <p>
            Une API est un intermédiaire qui permet à plusieurs applications de communiquer entre elles. En d'autres termes, une API gèrent et sécurisent les envois et demande de donnée entre deux services.
        </p>
        <h3>MARKUP</h3>
        <p>
            Le Markup c’est le formatage du code pour que les sites soient affichés. Il est généré au moment de la construction avant qu'un site Jamstack ne soit déployé sur un CDN. 
            Les langages Markup les plus connus sont HTML, XML et XHTML. 
        </p>

        <h2>Pourquoi choisir un site Jamstack ?</h2>
        <p>L’architecture Jamstack à de nombreux avantages comme :</p>
        <h3>Sécurité</h3>
        <p>L’architecture Jamstack réduit le nombre de serveurs et de systèmes à protéger contre les attaques. </p>
        <p>Les pages sont servies de façon statique en limitant au maximum le nombre d’appels à des serveurs externes. Moins de portes d’entrée = moins de vulnérabilité.</p>
        <p>Les outils et services dynamiques externes ont déjà des équipes dédiées à la sécurisation de leurs systèmes.</p>
        <h3>Rapidité</h3>
        <p>La vitesse de chargement d’un site a un impact sur l'expérience utilisateur et la conversion. Un site rapide est sera aussi forcement avantagé en termes de référencement.</p>
        <p>Les sites Jamstack suppriment le besoin de générer les pages sur un serveur à chaque demande d’un visiteur. À la place on va venir générer les pages à l'avance lors de la construction du site. </p>
        <p>Toutes les pages étant déjà disponibles sur un CDN au plus proche du visiteur les performances sont très élevées sans avoir besoin d'une d'infrastructure coûteuse ou complexe.</p>
        <h3>Scalable</h3>
        <p>Le stress que les serveurs lâchent après un afflux de visiteur trop important c’est du passé ! Les CDN étant presque infiniment adaptatifs, votre site supportera l’afflux de visiteur et délivrera toujours des performances optimales.</p>
        <h3>Flexibilité</h3>
        <p>Toute solution d'hébergement statique peut desservir un site Jamstack. Vous n’aurez donc quasiment plus de limitation sur le choix de votre hébergeur et vous pourrez le changer très facilement.</p>

        <Lighthouse class="my-10" />

        <h2 class="max-w-xl">Gérer son contenu avec un headless CMS</h2>
        <h3>Qu’est-ce qu’un headless CMS ?</h3>
        <p>
            Un headless CMS c’est tout simplement un CMS classique, mais sans la partie frontend, c’est a dire qu’il joue uniquement sont rôle de gestion de contenu. Il sera généralement hébergé sur un autre serveur. Notre site va ensuite générer les contenus en statique, soit par une API, soit par des fichiers Markdown sur Github ou Gitlab.
        </p>
        <h3>Qu’elles sont les avantages d’un headless CMS ?</h3>
        <p>
            Les principaux avantages d’un headless CMS sont la sécurité, la maintenance et la simplicité.
            En règle général le CMS et déjà hébergé et maintenus par le service qui le propose, on peut donc se concentré sur le site en lui-même.
        </p>
        <p>En termes de sécurité vu que nos contenus sont pré-rendu on essaye de ne pas faire d’appel au CMS sur le site, ce qui limite bien sûr les éventuelles attaques. </p>
        <h3>Qu’elles sont les différents types de headless CMS ?</h3>
        <p>Parmi les différents headless CMS on retrouve principalement deux types :</p>
        <h4>Fonctionnement par API :</h4>
        <p>Ici notre site communique avec le CMS par le biais d’un API, on aura donc une base de données et une grande liberté d’action.</p>
        <div class="pt-10">
            <h5 class="font-bold">Avantages :</h5>
            <ul class="my-3 list-disc list-inside">
                <li class="mt-3 ml-3">Possibilité de servir différents types d’applications.</li>
                <li class="mt-3 ml-3">Plus de fonctionnalités.</li>
                <li class="mt-3 ml-3">Plus adapté pour les gros projets qui ont besoin de beaucoup de donnée.</li>
                <li class="mt-3 ml-3">Aucune maintenance n’est nécessaire.</li>
                <li class="mt-3 ml-3">Totalement découplé du site.</li>
            </ul>
        </div>
        <div class="pt-10">
            <h5 class="font-bold">Inconvénients :</h5>
            <ul class="my-3 list-disc list-inside">
                <li class="mt-3 ml-3">Souvent plus couteux que les CMS par git.</li>
                <li class="mt-3 ml-3">Un petit peu plus long à mettre en place qu’un CMS par git.</li>
            </ul>
        </div>
        <div class="py-14 sm:py-20">
            <h5 class="font-bold inline-block mb-6">Exemple de CMS par API :</h5>
            <ul class="my-3 grid grid-cols-2 sm:grid-cols-3 gap-10 items-center">
                <li>
                    <a href="https://strapi.io/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/strapi-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.sanity.io/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/sanity-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.contentful.com/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/contentfull-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://prismic.io/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/prismic-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.storyblok.com/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/storyblok-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.datocms.com/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/datocms-color.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <h4>Fonctionnement avec Git :</h4>
        <p>Ici le CMS va être lié au répertoire Git de votre site, quand une modification va être effectuée sur le CMS il va faire un commit et générer un fichier Markdown que l’on va ensuite afficher sur le site.</p>
        <div class="pt-10">
            <h5 class="font-bold">Avantages :</h5>
            <ul class="my-3 list-disc list-inside">
                <li class="mt-3 ml-3">Peu couteux.</li>
                <li class="mt-3 ml-3">Pas de base de données.</li>
                <li class="mt-3 ml-3">Facile et rapide à mettre en place.</li>
                <li class="mt-3 ml-3">Aucune maintenance n’est nécessaire.</li>
                <li class="mt-3 ml-3">Les données vous appartiennent.</li>
            </ul>
        </div>
        <div class="pt-10">
            <h5 class="font-bold">Inconvénients :</h5>
            <ul class="my-3 list-disc list-inside">
                <li class="mt-3 ml-3">Peu de flexibilité, en géneral on va l’utiliser que pour de la rédaction de contenu.</li>
                <li class="mt-3 ml-3">Les images sont hébergées sur votre CDN ou par le biais d’un service tiers.</li>
                <li class="mt-3 ml-3">Pas très adapté pour les sites avec énormément de contenus.</li>
            </ul>
        </div>
        <div class="py-14 sm:py-20">
            <h5 class="font-bold inline-block mb-6">Exemple de CMS par API :</h5>
            <ul class="my-3 grid grid-cols-2 sm:grid-cols-3 gap-10 items-center">
                <li>
                    <a href="https://www.netlifycms.org/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/netlify-cms-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://forestry.io/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/forestry-color.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://tina.io/" target="_blank" rel="noopener">
                        <img src="~/static/img/brand/tina-color.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>

        <h2>Jamstack vs Wordpress :</h2>
        <img class="mx-auto mb-16" src="~/static/img/wordpress-vs-jamstack.png" alt="Jamstack vs Wordpress" width="600" height="285">
        <p>
            Commençons par dire déjà que Wordpress est une plateforme, la Jamstack c’est une architecture, de se point de vue la les deux solutions sont déjà différentes.
            Rentrons quand même dans le sujet et voyons qu’est-ce qui justifierait de choisir une approche plutôt qu’une autre pour un futur projet web. 
        </p>
        <h3>Adoption</h3>
        <p>Le point revient a Wordpress, la plate-forme qui s’approche des 20 ans d’existence a fait ses preuves et représente près de 30 % des sites sur le web difficile de faire mieux !</p>
        <p>
            Cependant attention aux arrières, l’approche Jamstack est récente et on enregistre déjà une popularité énorme avec près d’un million de développeurs inscrits sur Netlify ( la plate-forme qui a introduit le terme Jamstack ). Pour l’instant c’est environ 2% des sites sur le web, c’est un début, mais qui montre une chose importante, l’intérêt des développeurs pour cette “technologie”. On s’attend donc à une adoption de près de 10% du web d’ici 5 ans.
        </p>
        <h3>Performances</h3>
        <p>Le point revient a la Jamstack, malgré qu’il soit tout à fait possible d’obtenir d’excellentes performances avec un site Wordpress cela demande cependant des compétences techniques.</p>
        <h3>Sécurité</h3>
        <p>Les sites Jamstack son naturel moins susceptible a des attaques, car ils sont statiques et hébergés sur des CDN.</p>
        <p>Sur Wordpress on doit régulièrement faire des mises à jours pour se protéger et configurer correctement son site.</p>
        <p>Cependant comme pour les performances il est tout à fait possible d’obtenir un site Worpress très sécurisé avec quelques compétences techniques.</p>
        <h3>Facilité de conception</h3>
        <p>
            Pour l’instant le point revient à Wordpress, en effet on peut créer facilement un site sans avoir des connaissances en développement ce qui n’est pas le cas de la Jamstack. Cependant il y des entreprises sont déjà sur le créneau comme <a href="https://www.stackbit.com/" target="_blank" rel="noopener" class="font-bold underline hover:text-blue">Stackbits</a> qui développe un éditeur visuel et propose des templates pour obtenir un site Jamstack en 5 min.
        </p>
        <p>
            L’architecture Jamstack a était pensé aussi pour rendre la vie des développeurs plus facile, pas de contrainte sur les technologies a utilisé, beaucoup moins de complexité et tout est géré avec git ce qui rend en général le développement beaucoup plus organisé, rapide et fiable. 
        </p>
        <h3>Coût</h3>
        <p>Malgré qu’il soit possible d’héberger un site Wordpress à très bas prix ont très vite limité en termes de performance liée au serveur.</p>
        <p>L’utilisation d’un CDN est beaucoup moins chère qu’un serveur classique et peut supporter un trafic très important sans perdre la moindre performance.</p>
        <p>La Jamstack remporte le point cependant il faut considérer aussi des couts supplémentaires pour le développement. </p>
        <h3>Conclusion</h3>
        <p>
            Worpress est et restera encore pour un bon moment une solution efficace pour de nombreux projets c’est la meilleure option quand n’a pas forcement une équipe très technique et qu’on ne veut pas faire appel à des développeurs.
        </p>
        <p>
            L’approche Jamstack est quant à elle une solution qui mise plutôt sur l’avenir. C’est la solution à choisir, si faire appel à des développeurs ne vous dérange pas et que la sécurité et les performances sont primordiales pour vous.
        </p>

        <h2>Exemple de site Jamstack :</h2>
        <h3>Louis vuitton</h3>
        <img class="my-10 mx-auto" src="~/static/img/louis-vuitton.png" width="600" height="284" alt="">
        <a href="https://louisvuitton.com" target="_blank" rel="noopener" class="underline hover:text-blue">Voir le site</a>

        <h3>Envato</h3>
        <img class="my-10 mx-auto" src="~/static/img/envato.png" width="600" height="283" alt="">
        <a href="https://envato.com/" target="_blank" rel="noopener" class="underline hover:text-blue">Voir le site</a>

        <h2>Quand utiliser l’approche Jamstack ?</h2>
        <p>
            Si vous vous souciez des performances, de la sécurité et que le fait de passer par un développeur ne vous dérange pas, l’approche Jamstack est la voie à suivre.
        </p>
        <p>
            Si votre équipe est habituée à d’autres outils et qu'il ne vous rapporte pas d'investir du temps et de l'argent pour adopter de nouvelles technologies il n’est pas forcément nécessaire de se lancer dans l’aventure. 
        </p>
        <p>
            Si votre site dispose d'une base de données énorme et vous avez de nombreux besoins d’éléments en temps réel, ne choisissez pas l’architecture Jamstack. 
        </p>
        <p>
            Il n'est pas toujours nécessaire de migrer vos vieux sites avec beaucoup de trafic, mais si vous en commencez un nouveau projet, l'approche Jamstack est à grandement considérer.
        </p>
    </main>
</template>

<style lang="scss" scoped>
p{
    margin-bottom: 1rem;
}
h2{
    font-weight: 800;
    font-size: 36px;
    margin: 6rem 0 3rem 0;
}
h3{
    font-weight: 600;
    font-size: 24px;
    position: relative;
    width: fit-content;
    z-index: 10;
    margin: 2rem 0 1.5rem 0;
    &::after{
        content: "";
        position: absolute;
        width:  calc(100% + 10px);
        height: 9px;
        bottom: 6px;
        left: 0px;
        background: #D0F224;
        z-index: -1;
    }
}

h4{
    font-size: 20px;
    font-weight: 700;
    color: #2F2E8B;
    margin: 2.5rem 0 1.2rem 0;
}

@media only screen and (max-width: 768px) {
    h2{
        font-weight: 800;
        font-size: 28px;
        margin: 2.5rem 0 2rem 0;
    }
    h3{
    font-size: 20px;
    margin: 2rem 0 1.5rem 0;
    font-weight: 700;
    &::after{
        height: 7px;
        bottom: 4px;
        width: 100%;
    }
    h4{
        font-size: 18px;
        color: #2F2E8B;
    }
}
}
</style>