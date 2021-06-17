<template>
    <article class="blog-card shadow-lg bg-white">
        <img :src="src" :alt="alt" width="300" height="200">
        <div class="flex flex-col justify-center items-center p-4">
            <h2 class="font-bold text-xl mb-1">{{ title }}</h2>
            <p class="inline-block text-sm font-medium mb-1">{{description.substring(0, 69) + ' ...'}}</p>
            <NuxtLink class="top-8 right-0 bg-dark text-white py-2 px-6 mt-3 rounded-md hover:text-lime transition duration-300 ease-in-out" :to="`/blog/${permalink}/`">Lire l'article</NuxtLink>
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
.blog-card{
    width: 300px;
    height: 400px;
}
</style>