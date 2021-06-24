<template>
    <div class="flex flex-col justify-center items-center py-20 sm:py-40">
        <h1 class="text-3xl sm:text-5xl font-extrabold mb-10 mx-4 text-center">La page est introuvable...</h1>
        <img src="~/static/img/ah.gif" alt="">
        <NuxtLink to="/">
            <button class="dark-btn mt-10">Revenir sur le site</button>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: 'La page est introuvable',
            meta: [
                { hid: 'description', name: 'description', content: "Page 404"},
                { hid: 'robots', name:'robots', content:'noindex, nofollow' },
            ],
        }
    },
}
</script>