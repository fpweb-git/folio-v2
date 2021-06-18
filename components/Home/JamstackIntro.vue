<template>
    <section>
        <div class="py-10 md:py-20 flex flex-col items-center main-container px-4">
            <span class="text-blue font-semibold text-lg inline-block mb-6">Prenez une longeur d’avance</span>
            <h2 class="text-center max-w-lg font-extrabold text-4xl sm:text-5xl mb-8 sm:mb-10">Developpement Jamstack</h2>
            <p class="text-center max-w-3xl">La rapidité de votre site est <strong>l’un des facteurs de référencement les plus important pour Google</strong>, elle améliore l'expérience utilisateur. Un site performant aura donc forcement plus de chance de se potionner en haut de liste des résultats du moteur de recherche.</p>
            <Lighthouse class="mt-14 sm:mt-20"/>
        </div>

        <div class="py-20 lg:py-48 w-full bg-lightgray">
            <div class="main-container px-4 flex justify-between items-center flex-col xl:flex-row">
                <div class="max-w-xl">
                    <h3 class="text-3xl sm:text-4xl font-extrabold mb-8">Les avantages de l’architecture Jamstack</h3>
                    <p class="mb-10">
                        La Jamstack (Javascript, API, Markup), est une architecture de développement Web moderne qui met l'accent sur l'utilisation de CDN et le fait de découpler différents services pour obtenir des sites performants, robustes et sécurisés en utilisant des frameworks modernes.
                    </p>
                    <NuxtLink to="/" class="text-blue underline font-medium flex items-center">
                        En savoir plus
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
                            <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="#2F2E8B"/>
                        </svg>
                    </NuxtLink>
                </div>

                <div class="relative advantage-card-block mb-0 md:mb-20 lg:mb-0 mt-20 md:mt-40 xl:mt-0 grid grid-cols-2 gap-6 sm:gap-10 md:block">
                    <div class="dashed-box absolute md:relative"></div>
                    <div class="w-48 h-56 p-4 bg-white shadow-lg rounded-lg relative md:absolute md:-top-24 md:left-20">
                        <img src="~/static/img/lock-icon.svg" alt="cadena icon" loading="lazy" class="mb-2">
                        <h4 class="font-bold mb-1">Sécurité</h4>
                        <p class="text-xs">
                            Les pages sont servit de façon statique en limitant au maximum le nombre d’appels serveurs. Les services externes sont sécurisé par les fournisseurs.
                        </p>
                    </div>
                    <div class="w-48 h-56 p-4 bg-white shadow-lg rounded-lg relative md:absolute md:-bottom-24 md:-left-20">
                        <img src="~/static/img/scale-icon.svg" alt="layer icon" loading="lazy" class="mb-2">
                        <h4 class="font-bold mb-1">Fléxible</h4>
                        <p class="text-xs">
                            Hébergement simple, et migrable très facilement. Quasiment plus de problemes de compatibilité avec les services externes.
                        </p>
                    </div>
                    <div class="w-48 h-56 p-4 bg-white shadow-lg rounded-lg relative md:absolute md:-bottom-32 md:right-16">
                        <img src="~/static/img/stable-icon.svg" alt="cloud icon" loading="lazy" class="mb-2">
                        <h4 class="font-bold mb-1">Stable</h4>
                        <p class="text-xs">
                            Un CDN s’adapte automatiquement et de façon quasi illimiter au nombre de visiteur. Fini les serveurs qui lachent après un fort afflux. 
                        </p>
                    </div>
                    <div class="w-48 h-56 p-4 bg-white shadow-lg rounded-lg relative md:absolute md:-top-20 md:-right-20">
                        <img src="~/static/img/eclair-icon.svg" alt="speed icon" loading="lazy" class="mb-2">
                        <h4 class="font-bold mb-1">Performant</h4>
                        <p class="text-xs">
                            Toutes les pages étant déjà disponibles sur un CDN, les performances sont donc très élevées sans avoir besoin d’une d'infrastructure coûteuse ou complexe.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-dark w-full pt-10 md:pt-20">
            <div class="main-container px-4">
                <h3 class="text-white text-3xl sm:text-4xl font-extrabold text-center mb-14 sm:mb-20">Les technologies<br class="block sm:hidden"> que j’utilise</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20">
                    <div class="w-auto sm:w-80 mx-0 sm:mx-auto flex flex-col">
                        <h4 class="text-lime font-bold text-2xl mb-10 text-center sm:text-left">Headless CMS :</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-6">
                            <img src="~/static/img/brand/forestry.svg" loading="lazy" width="148" height="31" alt="forestry logo" class="mx-auto sm:mx-0">
                            <img src="~/static/img/brand/strapi.svg" loading="lazy" width="125" height="33" alt="" class="mx-auto sm:mx-0">
                            <img src="~/static/img/brand/storyblock.svg" loading="lazy" width="146" height="39" alt="" class="mx-auto sm:mx-0">
                            <img src="~/static/img/brand/netlify-cms.svg" loading="lazy" width="148" height="38" alt="" class="mx-auto sm:mx-0">
                        </div>
                    </div>

                    <div class="w-auto sm:w-80 mx-0 sm:mx-auto flex flex-col">
                        <h4 class="text-lime font-bold text-2xl mb-10 text-center sm:text-left">Framework :</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-6">
                            <img src="~/static/img/brand/nuxt.svg" loading="lazy" width="148" height="31" alt="" class="mx-auto sm:mx-0">
                            <img src="~/static/img/brand/gridsome.svg" loading="lazy" width="148" height="28" alt="" class="mx-auto sm:mx-0">
                        </div>
                    </div>

                    <div class="w-auto sm:w-80 mx-0 sm:mx-auto flex flex-col">
                        <h4 class="text-lime font-bold text-2xl mb-10 text-center sm:text-left">Déploiement :</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-6 w-auto sm:w-max">
                            <img src="~/static/img/brand/netlify.svg" loading="lazy" width="113" height="40" alt="" class="mx-auto sm:mx-0">
                            <img src="~/static/img/brand/cloudflare-pages.svg" loading="lazy" width="115" height="45" alt="" class="mx-auto sm:mx-0">
                        </div>
                    </div>

                    <div class="w-auto sm:w-80 mx-0 sm:mx-auto flex flex-col">
                        <h4 class="text-lime font-bold text-2xl mb-10 text-center sm:text-left">Solution Ecommerce :</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-6">
                            <img src="~/static/img/brand/snipcart.svg" loading="lazy" width="148" height="32" alt="" class="mx-auto sm:mx-0">
                            <img src="~/static/img/brand/shopify.svg" loading="lazy" width="114" height="33" alt="" class="mx-auto sm:mx-0">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20 flex justify-center items-center overflow-hidden">
                <svg class="min-w-max" width="422" height="211" viewBox="0 0 422 211" fill="none" xmlns="http://www.w3.org/2000/svg" id="geometric-shape">
                    <rect class="geo-blue-bottom" x="209.945" y="105.5" width="105.5" height="105.5" transform="rotate(90 209.945 105.5)" fill="#2F2E8B"/>
                    <path class="geo-blue-top" d="M315.445 0C315.445 58.266 268.211 105.5 209.945 105.5V0L315.445 0Z" fill="#2F2E8B"/>
                    <path class="geo-lime-left" d="M0 211C0 152.734 47.234 105.5 105.5 105.5V211H0Z" fill="#D0F224"/>
                    <path class="geo-white-right" d="M316.5 105.5C374.766 105.5 422 152.734 422 211H316.5V105.5Z" fill="white"/>
                    <path class="geo-white-top" d="M211 0V105.5L105.5 105.5C105.5 47.234 152.734 0 211 0Z" fill="white"/>
                    <path class="geo-lime-right" d="M316.5 105.5V211C258.234 211 211 163.766 211 105.5L316.5 105.5Z" fill="#D0F224"/>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted(){
        const gsap = this.$gsap
        const geoAnimation = gsap.timeline({
            scrollTrigger : {
                trigger: '#geometric-shape',
                start : 'center bottom',
            },
        })

        geoAnimation
        .from('.geo-blue-bottom', { opacity:0, rotate: 45, transformOrigin:"50% 50%", duration: 1, ease: 'Power2.easeInOut' }, 'run')
        .from('.geo-lime-left', { opacity:0, rotate: -90, transformOrigin:"50% 50%", duration: 1, ease: 'Power2.easeInOut' }, 'run')
        .from('.geo-blue-top', { opacity:0, rotate: -90, transformOrigin:"50% 50%", duration: 1, ease: 'Power2.easeInOut' }, 'run')
        .from('.geo-white-right', { opacity:0, rotate: 90, transformOrigin:"50% 50%", duration: 1, ease: 'Power2.easeInOut' }, 'run')
        .from('.geo-lime-right', { opacity:0, rotate: -90, transformOrigin:"50% 50%", duration: 1, ease: 'Power2.easeInOut' }, 'run')
        .from('.geo-white-top', { opacity:0, rotate: -90, transformOrigin:"50% 50%", duration: 1, ease: 'Power2.easeInOut' }, 'run')
    }
}
</script>

<style lang="scss" scoped>
.dashed-box {
    width:475px;
    height:280px;
    background-image: linear-gradient(90deg, #2F2E8B 50%, transparent 50%), linear-gradient(90deg, #2F2E8B 50%, transparent 50%), linear-gradient(0deg, #2F2E8B 50%, transparent 50%), linear-gradient(0deg, #2F2E8B 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 69px 9px, 69px 9px, 9px 69px, 9px 69px;
    background-position: left top, right bottom, left bottom, right top;
    animation: border-move 1s infinite linear;
}

@keyframes border-move {
    0% {
        background-position: left top, right bottom, left bottom, right top;
    }
    100% {
        background-position: left 69px top, right 69px bottom , left bottom 69px , right top 69px;
    }
}

@media only screen and (max-width: 767px) {
    .dashed-box {
        width:350px;
        height:280px;
        top: 18%;
        left: 8%;
        background-image: linear-gradient(90deg, #2F2E8B 50%, transparent 50%), linear-gradient(90deg, #2F2E8B 50%, transparent 50%), linear-gradient(0deg, #2F2E8B 50%, transparent 50%), linear-gradient(0deg, #2F2E8B 50%, transparent 50%);
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 69px 9px, 69px 9px, 9px 69px, 9px 69px;
        background-position: left top, right bottom, left bottom, right top;
        animation: border-dance 1s infinite linear;
    }
}

@media only screen and (max-width: 640px) {
    .dashed-box {
        display: none;
        width: unset;
        height: unset;
        top: unset;
        left: unset;
        background-image: unset;
        background-repeat: unset;
        background-size: unset;
        background-position: unset;
        animation: unset;
    }
}

@media only screen and (max-width: 465px) {
    .advantage-card-block {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>