<template>
    <main class="bg-lightgray">
        <div class="main-container py-10 sm:py-20">
            <div class="px-4">
                <h1 class="text-center font-semibold text-lg text-blue mb-3">Mes services</h1>
                <h2 class="text-3xl md:text-5xl font-extrabold text-center max-w-xl mx-auto mb-8">Développement web freelance</h2>
                <p class="max-w-2xl text-center mx-auto mb-6">Je propose mes services pour les particuliers, entreprises et agences de communication.</p>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 w-max mx-auto gap-14 my-14">
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="site vitrine"
                title="Site vitrine | blog"
                text="Des sites modernes et performants qui maximise vos chances d’etre bien référencé. Je vous accompagne dans tout les processus de création et le suivi."
                />
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="Ecommerce"
                title="Ecommerce"
                text="Votre site marchand sur mesure, construit avec des solutions réputé comme shopify ou snipcart."
                />
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="Developpement frontend"
                title="Developpement frontend"
                text="Je propose mes services de devellopement sur des projets frontend, n’hésitez pas a me contacter pour en savoir plus."
                />
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="Web design"
                title="Web design"
                text="Création de maquette pour obtenir un rendu moderne à votre image; tout en respectant les critères nécessaire a une excellente expérience utilisateur."
                />
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return {
            baseUrl : 'https://francois-parrou.com'
        }
    },
    head () {
        return {
            title: "Mes services de développement web",
            meta: [
                { hid: 'description', name: 'description', content: "Découvrez mes services de développement Web freelance : Site vitrine, Blog, Ecommerce, Web design et Développement Frontend avec Vue.js." },

                {property:'og:type', content:'website'},
                {property:'og:site_name', content:'françois-parrou.com'},
                {property:'og:url', content: this.baseUrl + '/services/' },
                {property:'og:title', content: "Mes services de développement web"},
                {property:'og:description', content: "Découvrez mes services de développement Web freelance : Site vitrine, Blog, Ecommerce, Web design et Développement Frontend avec Vue.js." },
                {property:'og:image', content: this.baseUrl + '/img/og-picture.jpg' },

                {property:'twitter:card', content:'summary_large_image'},
                {property:'twitter:url', content: this.baseUrl + '/services/'},
                {property:'twitter:title', content: "Mes services de développement web"},
                {property:'twitter:description', content: "Découvrez mes services de développement Web freelance : Site vitrine, Blog, Ecommerce, Web design et Développement Frontend avec Vue.js." },
                {property:'twitter:image', content: this.baseUrl + '/img/og-picture.jpg'},

                {hid: 'robots', name:'robots', content:'max-image-preview:large'}
            ],
        }
    },
}
</script>