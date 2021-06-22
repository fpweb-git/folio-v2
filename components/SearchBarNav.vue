<template>
    <div class="relative">
        <label for="searchbar" title="Rechercher sur le site">
            <input
                id="searchbar"
                v-model="searchQuery"
                type="search"
                label="search"
                autocomplete="off"
                placeholder="Rechercher..."
                class="block text-xs text-white pl-1 pr-6 truncate leading-5 focus:outline-none"
            />
        </label>
        <div v-if="!posts.length && !searchQuery == '' " class="z-10 absolute py-3 w-full flex-1 flex justify-center items-center bg-white overflow-hidden">
            <p class="text-xs text-gray-600 py-4 text-center my-auto">Aucun résultat trouvé</p>
        </div>
        <div v-if="loadingContent" class="z-10 right-2 top-1 absolute flex-1 flex justify-center items-center overflow-hidden">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        <ul v-if="posts.length" class="z-10 absolute flex-1 bg-white overflow-hidden w-full">
            <li @click="resetSearch()" v-for="post of posts" :key="post.slug">
                <NuxtLink :to="`/blog/${post.permalink}/`" class="flex flex-col border-b border-gray-400 py-4 text-dark font-semibold text-sm px-2 leading-5 hover:text-blue hover:border-blue transition ease-in-out duration-150">
                    <span class="inline-block text-xs font-gray-500 font-normal mb-2 border-l-4 pl-1 border-blue">Article de blog</span>
                    {{ post.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchQuery: '',
            posts: [],
            loadingContent: false,
        }
    },
    watch: {
        async searchQuery(searchQuery) {
            if (!searchQuery) {
                this.posts = []
                return
            }
            this.loadingContent = true
            this.posts = await this.$content('blog')
            .only(['title', 'permalink'])
            .limit(6)
            .search(searchQuery)
            .fetch()
            this.loadingContent = false
        }
    },
    methods: {
        resetSearch(){
            this.searchQuery = ''
        }
    }
}
</script>

<style lang="scss" scoped>

input {
    background: unset;
    border: unset;
    color: white;
    border-bottom: 1px solid #ffffff;
    width: 200px;
    padding-top: 4px;
    padding-bottom: 4px;
    &::placeholder {
        color: #ffffff;
        opacity: 0.7;
    }
}

input:focus {
    background-image: none;
    border: 1px solid white; 
    outline: none;
    box-shadow: 0 0;
}

input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: none;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    right: 0;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    margin: 3px;
    border: 3px solid #ffffffb4;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ffffffb0 transparent transparent transparent;
    opacity: 0.4;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>