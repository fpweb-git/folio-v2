<template>
    <main class="bg-lightgray">
        <div class="main-container py-10 sm:py-20">
            <div class="px-4">
                <h1 class="text-3xl md:text-5xl font-extrabold text-center max-w-xl mx-auto mb-20">Mes réalisations</h1>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 w-max mx-auto gap-14 my-14">
                <li v-for="realisation in realisations" :key="realisation.title">
                    <RealisationsCard
                        :src="realisation.cover"
                        :alt="realisation.alt"
                        :link="realisation.link"
                        :title="realisation.title"
                        :type="realisation.type"
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const realisations = await $content('realisations')
        .only(['cover', 'link', 'date', 'title', 'type', 'alt'])
        .sortBy('date', 'desc')
        .fetch()

        return { realisations }
    },
    data(){
        return {
            baseUrl : 'https://francois-parrou.com'
        }
    },
    head () {
        return {
            title: "Mes projets et réalisations",
            meta: [
                { hid: 'description', name: 'description', content: "Retrouvez sur cette page un aperçu de mon travail personnel et professionnel." },

                {property:'og:type', content:'website'},
                {property:'og:site_name', content:'françois-parrou.com'},
                {property:'og:url', content: this.baseUrl + '/realisations/' },
                {property:'og:title', content: "Mes projets et réalisations"},
                {property:'og:description', content: "Retrouvez sur cette page un aperçu de mon travail personnel et professionnel." },
                {property:'og:image', content: this.baseUrl + '/img/og-picture.jpg' },

                {property:'twitter:card', content:'summary_large_image'},
                {property:'twitter:url', content: this.baseUrl + '/realisations/'},
                {property:'twitter:title', content: "Mes projets et réalisations"},
                {property:'twitter:description', content: "Retrouvez sur cette page un aperçu de mon travail personnel et professionnel." },
                {property:'twitter:image', content: this.baseUrl + '/img/og-picture.jpg'},

                {hid: 'robots', name:'robots', content:'max-image-preview:large'}
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.page-enter-active {
    transition: opacity 0.4s ease-in-out, transform 0.5s ease;
}
.page-enter {
    opacity: 0;
    transform: translateY(100px);
}
</style>