<template>
    <div class="realisation-card shadow-lg bg-white relative">
        <img :src="src" :alt="alt" width="300" height="280">
        <a class="absolute top-8 right-0 bg-dark text-lime py-2 px-3 rounded-l-md hover:text-white transition duration-300 ease-in-out" :href="link" target="_blank" rel="noopener">Voir le projet</a>
        <div class="h-20 flex flex-col justify-center items-center">
            <h2 class="font-bold text-xl mb-1">{{ title }}</h2>
            <span class="inline-block text-sm text-gray-700 font-medium mb-1">{{ type }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        src: String,
        alt: String,
        title: String,
        type: String,
        link: String,
    }
}
</script>

<style lang="scss" scoped>
.realisation-card{
    width: 300px;
    height: 360px;
}
</style>