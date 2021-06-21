<template>
    <div class="mb-6">
        <nav aria-label="fil d'ariane">
            <ul class="flex items-center text-sm">
                <li class="flex ariane-link">
                    <NuxtLink to="/" aria-label="Home" class="flex items-center justify-center">
                        <!-- <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15V10.5H10.5V15H14.25V9H16.5L9 2.25L1.5 9H3.75V15H7.5Z" fill="#2F2E8B"/>
                        </svg> -->
                        <img src="~/static/icon/home.svg" alt="">
                    </NuxtLink>
                </li>
                <li class="flex ariane-link">
                    <NuxtLink to="/blog/" aria-label="blog" class="text-blue">
                        blog
                    </NuxtLink>
                </li>
                <li aria-current="article" class="bg-lightgray text-blue px-2 py-1 rounded-md">{{ current }}</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props:{
        current : String,
    }
}
</script>

<style lang="scss" scoped>
.ariane-link::after{
    content: url(~/static/icon/triangle_right.svg);
    margin:0 0.6rem;
}
</style>