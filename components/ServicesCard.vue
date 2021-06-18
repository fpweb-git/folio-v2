<template>
    <li class="services-card shadow-lg bg-white">
        <img :src="src" width="300" height="200" :alt="alt">
        <div class="p-4">
            <h2 class="text-lg font-semibold mt-1 mb-2">{{ title }}</h2>
            <p class="text-sm">{{ text }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props:{
        src : String,
        alt: String,
        title : String,
        text : String
    }
}
</script>

<style lang="scss" scoped>
.services-card{
    width: 300px;
    height: 380px;
}
</style>