<template>
    <div class="flex justify-between content-container px-4">
        <NuxtLink
            v-if="prev"
            :to="'/blog/' + prev.permalink + '/'"
            class="underline relative"
        >
            <img :src="prev.cover" :alt="prev.title" width="180" height="120" class="miniature">
            <div class="bg-dark text-white absolute right-0 bottom-4 px-3 py-1 rounded-r-md text-sm">Précédent</div>
        </NuxtLink>
        <span v-else>&nbsp;</span>
        <NuxtLink
            v-if="next"
            :to="'/blog/' + next.permalink + '/'"
            class="underline relative"
        >
            <img :src="next.cover" :alt="next.title" width="180" height="120" class="miniature">
            <div class="bg-dark text-white absolute right-0 bottom-4 px-3 py-1 rounded-l-md text-sm">Suivant</div>
        </NuxtLink>
        <span v-else>&nbsp;</span>
    </div>
</template>

<script>
export default {
    props: {
        prev: {
            type: Object,
            default: () => null,
        },
        next: {
            type: Object,
            default: () => null,
        },
    },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 400px) {
.miniature{
    width: 100px;
    height: auto;
}
}
</style>
