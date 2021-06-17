<template>
    <main class="bg-lightgray">
        <div class="main-container py-10 sm:py-20">
            <div class="px-4">
                <h1 class="text-center font-semibold text-lg text-blue mb-3">Réalisations</h1>
                <p class="text-3xl md:text-5xl font-extrabold text-center max-w-xl mx-auto mb-10">Ils m’on confié leurs projets</p>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 w-max mx-auto gap-14 my-14">
                <li v-for="article in articles" :key="article.permalink">
                    <BlogaCard
                        :src="realisation.cover"
                        :alt="realisation.alt"
                        :link="realisation.permalink"
                        :title="realisation.title"
                        :description="realisation.description"
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
        // .only(['cover', 'link', 'date', 'title', 'type', 'alt'])
        .sortBy('date', 'desc')
        .fetch()

        return { articles }
    },
}
</script>