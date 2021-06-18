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
}
</script>