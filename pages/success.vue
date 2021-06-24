<template>
    <div class="main-container flex flex-col justify-center items-center py-40 sm:py-60 px-4">
        <div class="flex flex-col sm:flex-row mb-6">
            <h1 class="text-3xl sm:text-5xl leading-snug font-extrabold mr-3 text-center">Message envoyé !</h1>
            <svg class="mx-auto mt-6 sm:mt-0" width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8333 25.8774L6.91544 16.9596L6.20833 16.2525L5.50123 16.9596L2.29289 20.1679L1.58579 20.875L2.29289 21.5821L15.1262 34.4154L15.8333 35.1225L16.5404 34.4154L44.0404 6.91544L44.7476 6.20833L44.0404 5.50123L40.8321 2.29289L40.125 1.58579L39.4179 2.29289L15.8333 25.8774Z" fill="#D0F224" stroke="#D0F224" stroke-width="2"/>
            </svg>
        </div>
        <p class="text-center text-lg">Je vous répondrais dans les plus brefs délais.</p>
        <NuxtLink to="/">
            <button class="dark-btn mt-10">Revenir sur le site</button>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: 'Message envoyé !',
            meta: [
                { hid: 'description', name: 'description', content: 'Je vous réponds dans les plus brefs délais.'},
                { hid: 'robots', name:'robots', content:'noindex, nofollow' },
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
    transform: translateX(100px);
}
</style>