<template>
    <div>
        <article class="content-container py-20 px-4">
            <BreadCrumb :current="article.title.length < 20 ? article.title : article.title.substring(0, 18) + ' ...'" />
            <h1 class="text-4xl md:text-5xl font-extrabold max-w-lg my-14">{{ article.title }}</h1>
            <ArticleHeader :date="article.date" :title="article.title" :url="baseUrl + `/blog/${article.permalink}/`" />
            <img :src="article.cover" class="mb-10" width="773" height="515" :alt="article.title">
            <Toc :article="article" />
            <nuxt-content :document="article" />
        </article>
        <PrevNext :prev="prev" :next="next" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            baseUrl : 'https://francois-parrou.com'
        }
    },
    async asyncData({ $content, params }) {
        let article = await $content('blog')
        .where({ permalink : params.article })
        .only(['cover', 'permalink', 'date', 'slug', 'title', 'description', 'body', 'metaDescription', 'metaTitle', 'toc' ])
        .fetch()

        article = article[0]

        const [prev, next] = await $content('blog')
        .only(['title', 'permalink', 'date', 'cover'])
        .sortBy('date', 'asc')
        .surround(article.slug)
        .fetch()

        return { article, prev, next }
    },
    head () {
        return {
            title: this.article.metaTitle,
            meta: [
                { hid: 'description', name: 'description', content: this.article.metaDescription },

                {property:'og:type', content:'website'},
                {property:'og:site_name', content:'françois-parrou.com'},
                {property:'og:url', content: this.baseUrl + `/blog/${this.article.permalink}/` },
                {property:'og:title', content: this.article.metaTitle },
                {property:'og:description', content: this.article.metaDescription },
                {property:'og:image', content: this.baseUrl + this.article.cover },

                {property:'twitter:card', content:'summary_large_image'},
                {property:'twitter:url', content: this.baseUrl + `/blog/${this.article.permalink}/` },
                {property:'twitter:title', content: this.article.metaTitle},
                {property:'twitter:description', content: this.article.metaDescription },
                {property:'twitter:image', content: this.baseUrl + this.article.cover},

                {hid: 'robots', name:'robots', content:'max-image-preview:large'}
            ],
        }
    },
}
</script>