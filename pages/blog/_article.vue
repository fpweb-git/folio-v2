<template>
    <div>
        <article class="content-container py-20 px-4">
            <BreadCrumb :current="article.title.length < 20 ? article.title : article.title.substring(0, 20) + ' ...'" />
            <h1 class="text-5xl font-extrabold max-w-lg my-14">{{ article.title }}</h1>
            <ArticleHeader :date="article.date" :title="article.title" :url="fullUrl + article.path + '/'" />
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
            fullUrl : ''
        }
    },
    async asyncData({ $content, params }) {
        let article = await $content('blog')
        .where({ permalink : params.article })
        .only(['cover', 'permalink', 'date', 'slug', 'title', 'description', 'body', 'metaDescritpion', 'metaTitle', 'toc', 'path'])
        .fetch()

        article = article[0]

        const [prev, next] = await $content('blog')
        .only(['title', 'permalink', 'date', 'cover'])
        .sortBy('date', 'asc')
        .surround(article.slug)
        .fetch()

        return { article, prev, next }
    },
    created(){
        this.fullUrl = process.env.BASE_URL
    }
}
</script>