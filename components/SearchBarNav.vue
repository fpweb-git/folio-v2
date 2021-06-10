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
                class="block text-xs pl-4 pr-3 truncate leading-5 focus:outline-none focus:bg-white bg-white"
            />
        </label>
        <div v-if="!posts.length && !searchQuery == '' " class="z-10 py-3 w-full flex-1 flex justify-center items-center bg-white overflow-hidden">
            <p class="text-xs text-gray-400 py-4 text-center my-auto">Aucun résultat trouvé</p>
        </div>
        <div v-if="loadingContent" class="z-10 right-2 top-1 absolute flex-1 flex justify-center items-center overflow-hidden">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        <ul v-if="posts.length" class="z-10 py-3 flex-1 bg-white overflow-hidden">
            <li @click="resetSearch()" v-for="post of posts" :key="post.slug">
                <NuxtLink :to="`/blog/${post.permalink}/`" class="flex border-b border-dark font-bold text-sm px-4 py-3 items-center leading-5 transition ease-in-out duration-150">
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

<style scoped>

input {
    background-image: url(../static/icon/search.svg);
    background-position: 95% center;
    background-repeat: no-repeat;
    border: unset;
    border-bottom: 1px solid #313243;
    width: 300px;
    padding-top: 6px;
    padding-bottom: 6px;
}

input:focus {
    background-image: none;
    border: 1px solid #2F2E8B; 
    outline: none;
    box-shadow: 0 0;
}

input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    /* height: 12px;
    width: 12px;
    background: url(../static/icon/cross.svg) no-repeat 50% 50%;
    opacity: 0;
    cursor: pointer; */
    pointer-events: none;
}

input[type="search"]:focus::-webkit-search-cancel-button {
    opacity: 1;
    pointer-events: all;
}

input[type="search"].dark::-webkit-search-cancel-button {
    filter: invert(1);
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 3px;
    border: 3px solid #2F2E8B;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #2F2E8B transparent transparent transparent;
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