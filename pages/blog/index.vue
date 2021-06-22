<template>
    <main class="bg-lightgray">
        <div class="main-container py-10 sm:py-20">
            <div class="px-4">
                <span class="inline-block font-semibold text-lg text-blue mb-10">Développement, design, technologies</span>
                <h1 class="text-3xl md:text-5xl font-extrabold">Blog</h1>
            </div>
            <div class="px-4 mt-8">
                {{ articles.length == 1 ? articles.length + ' article' : articles.length + ' articles' }}
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-3 w-max gap-14 my-14 px-4 mx-auto md:mx-0">
                <li v-for="article in articles" :key="article.permalink">
                    <BlogCard
                        :src="article.cover"
                        :alt="article.title"
                        :permalink="article.permalink"
                        :title="article.title"
                        :description="article.description"
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content('blog')
        .only(['cover', 'permalink', 'date', 'title', 'description'])
        .sortBy('date', 'desc')
        .fetch()

        return { articles }
    },
    data(){
        return {
            baseUrl : 'https://francois-parrou.com'
        }
    },
    head () {
        return {
            title: "Dev blog | développement web",
            meta: [
                { hid: 'description', name: 'description', content: "Retrouvez des articles sur le développement web (Html, Css, Javascript, Vue, React etc..), le design et les nouvelles technologies." },

                {property:'og:type', content:'website'},
                {property:'og:site_name', content:'françois-parrou.com'},
                {property:'og:url', content: this.baseUrl + '/blog/' },
                {property:'og:title', content: "Dev blog | développement web"},
                {property:'og:description', content: "Retrouvez des articles sur le développement web (Html, Css, Javascript, Vue, React etc..), le design et les nouvelles technologies." },
                {property:'og:image', content: this.baseUrl + '/img/og-picture.jpg' },

                {property:'twitter:card', content:'summary_large_image'},
                {property:'twitter:url', content: this.baseUrl + '/blog/'},
                {property:'twitter:title', content: "Dev blog | développement web"},
                {property:'twitter:description', content: "Retrouvez des articles sur le développement web (Html, Css, Javascript, Vue, React etc..), le design et les nouvelles technologies." },
                {property:'twitter:image', content: this.baseUrl + '/img/og-picture.jpg'},

                {hid: 'robots', name:'robots', content:'max-image-preview:large'}
            ],
        }
    },
}
</script>