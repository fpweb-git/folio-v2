<template>
    <main class="bg-lightgray">
        <div class="main-container py-10 sm:py-20">
            <div class="px-4">
                <span class="inline-block font-semibold text-lg text-blue mb-10">Developpement, design, technologies</span>
                <h1 class="text-3xl md:text-5xl font-extrabold mb-10">Blog</h1>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-3 w-max gap-28 my-14 px-4">
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
}
</script>