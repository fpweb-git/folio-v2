<template>
    <article class="blog-card shadow-lg bg-white">
        <img :src="src" :alt="alt" width="300" height="200">
        <div class="h-20 flex flex-col justify-center items-center">
            <h2 class="font-bold text-xl mb-1">{{ title }}</h2>
            <p class="inline-block text-sm text-gray-700 font-medium mb-1">{{ description }}</p>
            <NuxtLink class="top-8 right-0 bg-dark text-lime py-2 px-3 rounded-l-md hover:text-white transition duration-300 ease-in-out" :to="`/blog/${permalink}/`">Lire l'article</NuxtLink>
        </div>
    </article>
</template>

<script>
export default {
    props:{
        src: String,
        alt: String,
        title: String,
        description: String,
        permalink: String,
    }
}
</script>

<style lang="scss" scoped>
.realisation-card{
    width: 300px;
    height: 400px;
}
</style>