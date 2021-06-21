<template>
    <div class="pb-10">
            <div class="w-full p-6 mx-auto bg-lightgray rounded-xl shadow-md">
                <h2 class="uppercase text-black font-semibold text-lg border-b-4 border-blue pb-1">
                    Table des matieres
                </h2>
                <nav class="mt-3">
                    <ul class="pl-4">
                        <li
                        :class="{
                            'pl-4 text-xs': link.depth === 3,
                            'text-sm list-disc': link.depth === 2,
                        }"
                        class="hover:text-pink"
                        v-for="link of article.toc"
                        :key="link.slug">
                            <a
                                role="button"
                                class="mb-2 block"
                                :href="`#${link.id}`"
                                >{{ link.text }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        article : Object,
    }
}
</script>