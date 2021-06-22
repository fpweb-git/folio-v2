<template>
  <div>
    <HomeHero class="overflow-hidden"/>
    <HomeAbout />
    <HomeJamstackIntro />
    <HomeWebDev />
  </div>
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
            title: 'François parrou | développeur web freelance Vue.js et Jamstack',
            meta: [
                { hid: 'description', name: 'description', content: "Développeur web freelance, je propose mes services pour vos projets Vue.js. Je maitrise également l'architecture Jamstack, je peux donc vous proposer la création de sites web performants et sécurisés." },

                {property:'og:type', content:'website'},
                {property:'og:site_name', content:'françois-parrou.com'},
                {property:'og:url', content: this.baseUrl},
                {property:'og:title', content: 'François parrou | développeur web freelance Vue.js et Jamstack'},
                {property:'og:description', content: "Développeur web freelance, je propose mes services pour vos projets Vue.js. Je maitrise également l'architecture Jamstack, je peux donc vous proposer la création de sites web performants et sécurisés." },
                {property:'og:image', content: this.baseUrl + '/img/og-picture.jpg' },

                {property:'twitter:card', content:'summary_large_image'},
                {property:'twitter:url', content: this.baseUrl},
                {property:'twitter:title', content: 'François parrou | développeur web freelance Vue.js et Jamstack'},
                {property:'twitter:description', content: "Développeur web freelance, je propose mes services pour vos projets Vue.js. Je maitrise également l'architecture Jamstack, je peux donc vous proposer la création de sites web performants et sécurisés." },
                {property:'twitter:image', content: this.baseUrl + '/img/og-picture.jpg'},

                {hid: 'robots', name:'robots', content:'max-image-preview:large'}
            ],
        }
    },
}
</script>


