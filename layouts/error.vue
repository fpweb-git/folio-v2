<template>
    <div class="flex flex-col justify-center items-center px-4 py-20 sm:py-40">
        <img src="~/static/img/ah.gif" alt="">
        <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 mt-10 text-center">Erreur <span class="text-coral font-semibold">{{error.statusCode}}</span></h1>
        <p class="mb-6">{{error.message}}</p>
        <NuxtLink to="/">
            <button class="dark-btn mt-6">Revenir sur le site</button>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: 'Oops, une erreur',
            meta: [
                { hid: 'description', name: 'description', content: "Page d'erreur"},
                { hid: 'robots', name:'robots', content:'noindex, nofollow' },
            ],
        }
    },
    name: "error",
    props: ["error"],
}
</script>

