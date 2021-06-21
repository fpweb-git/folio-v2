<template>
    <header class="h-20 w-full bg-dark relative">
        <nav class="main-container h-full flex justify-between items-center px-4" id="navbar">
            <div class="flex items-center space-x-8">
                <NuxtLink to="/">
                    <img src="~/static/img/logo.svg" alt="françois parrou logo" width="35" height="35">
                </NuxtLink>
                <ul class="hidden lg:flex text-white space-x-8 items-center text-sm">
                    <li class="nav-links"><NuxtLink to="/">Accueil</NuxtLink></li>
                    <li class="nav-links"><NuxtLink to="/services/">Services</NuxtLink></li>
                    <li class="nav-links"><NuxtLink to="/realisations/">Réalisations</NuxtLink></li>
                    <li class="nav-links"><NuxtLink to="/jamstack/">Jamstack</NuxtLink></li>
                    <li class="nav-links"><NuxtLink to="/blog/">Blog</NuxtLink></li>
                    <li class="flex items-center"><button aria-label="rechercher" @click="openSearch()"><img src="~/static/icon/search_white.svg" class="cursor-pointer mr-2" alt="icône de recherche"></button>
                        <transition name="slide-search">
                            <SearchBarNav v-if="searchIsOpen"/>
                        </transition>
                    </li>
                </ul>
            </div>
            <div class="hidden lg:flex items-center space-x-8">
                <NuxtLink to="/login/" class="text-white text-sm nav-links">Connexion</NuxtLink>
                <button aria-label="contact" class="lime-btn-out">Contact</button>
            </div>
            <!-- mobile -->
            <div class="z-40 block lg:hidden">
                <button class="burger" @click="openRspNav()" aria-label="Ouvrir la navigation">
                    <svg width="40" height="40" viewBox="0 0 100 100">
                        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </div>
            <transition name="slide-left">
                <div v-if="rspIsOpen" class="absolute bg-deepdark top-0 right-0 px-10 py-24 z-30 shadow-xl">
                    <ul class="flex flex-col text-white space-y-6 mb-6">
                        <li class="nav-links"><NuxtLink to="/">Accueil</NuxtLink></li>
                        <li class="nav-links"><NuxtLink to="/services/">Services</NuxtLink></li>
                        <li class="nav-links"><NuxtLink to="/realisations/">Réalisation</NuxtLink></li>
                        <li class="nav-links"><NuxtLink to="/jamstack/">Jamstack</NuxtLink></li>
                        <li class="nav-links"><NuxtLink to="/blog/">Blog</NuxtLink></li>
                        <li><NuxtLink to="/login/" class="nav-links">Connexion</NuxtLink></li>
                    </ul>
                    <div>
                        <button aria-label="contact" class="lime-btn-out mt-4">Contact</button>
                    </div>
                </div>
            </transition>
        </nav>
    </header>    
</template>

<script>
export default {
    data() {
        return {
            searchIsOpen : false,
            rspIsOpen : false
        }
    },
    methods:{
        openSearch(){
            this.searchIsOpen ? this.searchIsOpen = false : this.searchIsOpen = true
        },
        openRspNav(){
            this.rspIsOpen ? this.rspIsOpen = false : this.rspIsOpen = true
            const burger = document.querySelector('.burger')

            burger.classList.toggle('opened')
        },
    },
    watch: {
        '$route': function(){
            this.rspIsOpen = false
            const burger = document.querySelector('.burger')
            burger.classList.remove('opened')
        }
    },
}
</script>

<style lang="scss" scoped>

.burger {
    border: none;
    cursor: pointer;
}
.line {
    fill: none;
    stroke: #D0F224;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), 
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
}
.line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
}
.line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
}
.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
}
.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
}
.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
}

.slide-left-enter,
.slide-left-leave-to {
    transform: translateX(200px);
    opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave {
    opacity: 1;
    transform: translateX(0);
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.3s ease-out;
    transform-origin: top left;
}

.slide-search-enter
{
    transform: scaleX(0.5);
    opacity: 0;
}

.slide-search-leave-to{
    opacity: 0;
}

.slide-search-enter-to{
    opacity: 1;
    transform: scaleX(1);
}

.slide-search-leave{
    opacity: 1;
} 

.slide-search-enter-active,
.slide-search-leave-active {
    transition: all 0.3s ease;
    transform-origin: center left;
}
</style>