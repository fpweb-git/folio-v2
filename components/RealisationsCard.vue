<template>
    <div class="realisation-card shadow-lg bg-white relative">
        <img :src="src" :alt="alt" width="300" height="280" loading="lazy">
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold text-xl mt-3 mb-2 mx-2">{{ title }}</h2>
            <span class="inline-block text-sm text-gray-700 font-medium mb-3">{{ type }}</span>
            <a class="bg-dark text-white py-2 px-4 rounded-md hover:text-lime transition duration-300 ease-in-out" :href="link" target="_blank" rel="noopener">Voir le projet</a>
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
    height: 420px;
}
</style>