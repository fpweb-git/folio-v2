<template>
    <section class="bg-dark w-full">
        <div class="main-container px-4 pt-6 lg:pt-20 flex flex-col lg:flex-row justify-between items-center">
            <div class="max-w-xl mr-3">
                <h1 class="text-white font-extrabold text-4xl sm:text-6xl">
                    <span class="text-lime text-lg inline-block mb-2 hero-lime-text">François Parrou</span><br>
                    Développeur web<br>
                    Vue.js, Jamstack
                </h1>
                <p class="text-white text-base sm:text-lg my-8">Je développe des sites web et apps <strong class="text-lime hero-lime-text">modernes</strong> et <strong class="text-lime hero-lime-text">rapides</strong> en utilisant Vue.js et Nuxt.js.</p>
                <NuxtLink to="/services/">
                    <button aria-label="contact" class="lime-btn mb-8 hero-btn">Mes services</button>
                </NuxtLink>
                <div class="flex space-x-6 mb-10 sm:mb-20">
                    <a href="https://www.linkedin.com/in/fran%C3%A7ois-parrou-21367b56/" target="_blank" rel="noopener" title="lien linkedin" >
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" class="fill-current text-white text-opacity-70 hover:text-opacity-100 transition ease duration-300" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.02911 17.1819H0.297321V5.71076H4.02911V17.1819ZM2.16121 4.14599C0.967902 4.14599 0 3.20252 0 2.06346C8.54116e-09 1.51632 0.227698 0.991599 0.633002 0.604718C1.03831 0.217836 1.58802 0.000488281 2.16121 0.000488281C2.73439 0.000488281 3.2841 0.217836 3.68941 0.604718C4.09471 0.991599 4.32241 1.51632 4.32241 2.06346C4.32241 3.20252 3.35411 4.14599 2.16121 4.14599ZM17.996 17.1819H14.2722V11.5978C14.2722 10.267 14.2441 8.56033 12.332 8.56033C10.3918 8.56033 10.0945 10.0062 10.0945 11.502V17.1819H6.3667V5.71076H9.9458V7.27553H9.99804C10.4963 6.37425 11.7133 5.42312 13.5289 5.42312C17.3057 5.42312 18 7.79712 18 10.8806V17.1819H17.996Z" fill-opacity="1"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/FrancoisPW" target="_blank" rel="noopener" title="lien twitter">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" class="fill-current text-white text-opacity-70 hover:text-opacity-100 transition ease duration-300" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1497 5.81884C16.1612 5.99326 16.1612 6.16773 16.1612 6.34215C16.1612 11.6624 12.4493 17.7925 5.66497 17.7925C3.57486 17.7925 1.63325 17.1321 0 15.9859C0.296965 16.0233 0.582469 16.0357 0.890859 16.0357C2.61545 16.0357 4.20303 15.4003 5.4708 14.3163C3.84898 14.2789 2.48984 13.1202 2.02155 11.5253C2.25 11.5627 2.47841 11.5876 2.71828 11.5876C3.04949 11.5876 3.38073 11.5378 3.68909 11.4506C1.99874 11.0768 0.730934 9.45705 0.730934 7.50089V7.45107C1.22203 7.75011 1.79314 7.937 2.39843 7.96189C1.40477 7.23921 0.753785 6.00573 0.753785 4.61024C0.753785 3.86268 0.936492 3.1774 1.25631 2.57934C3.0723 5.02142 5.80201 6.61622 8.86289 6.79068C8.8058 6.49165 8.77152 6.18019 8.77152 5.8687C8.77152 3.65086 10.4162 1.84424 12.4606 1.84424C13.5228 1.84424 14.4822 2.33016 15.156 3.11512C15.9898 2.94069 16.7893 2.60427 17.4974 2.14327C17.2233 3.07776 16.6408 3.86272 15.8756 4.36107C16.618 4.27389 17.3375 4.04957 17.9999 3.73811C17.4975 4.53549 16.8693 5.24566 16.1497 5.81884Z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/fpweb-git" target="_blank" rel="noopener" title="lien github">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" class="fill-current text-white text-opacity-70 hover:text-opacity-100 transition ease duration-300" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.02056 15.241C6.02056 15.3177 5.9371 15.3791 5.83185 15.3791C5.7121 15.3906 5.62863 15.3292 5.62863 15.241C5.62863 15.1643 5.7121 15.1029 5.81734 15.1029C5.92621 15.0914 6.02056 15.1528 6.02056 15.241ZM4.89194 15.0684C4.86653 15.1451 4.93911 15.2333 5.04798 15.2564C5.14234 15.2947 5.25121 15.2564 5.27298 15.1797C5.29476 15.1029 5.22581 15.0147 5.11694 14.9802C5.02258 14.9534 4.91734 14.9917 4.89194 15.0684ZM6.49597 15.0032C6.39073 15.0301 6.31814 15.1029 6.32903 15.1912C6.33992 15.2679 6.43427 15.3177 6.54315 15.2909C6.64839 15.264 6.72097 15.1912 6.71008 15.1145C6.69919 15.0416 6.60121 14.9917 6.49597 15.0032ZM8.88387 0.306641C3.8504 0.306641 0 4.34514 0 9.6646C0 13.9179 2.53306 17.5575 6.15121 18.8385C6.61573 18.9267 6.77903 18.6237 6.77903 18.3744C6.77903 18.1366 6.76815 16.825 6.76815 16.0196C6.76815 16.0196 4.22782 16.5949 3.69435 14.8767C3.69435 14.8767 3.28065 13.7606 2.68548 13.473C2.68548 13.473 1.85444 12.8708 2.74355 12.8824C2.74355 12.8824 3.64718 12.9591 4.14435 13.8718C4.93911 15.3522 6.27097 14.9265 6.78992 14.6734C6.87339 14.0598 7.10927 13.6341 7.37056 13.3809C5.34194 13.1431 3.29516 12.8325 3.29516 9.143C3.29516 8.08832 3.57097 7.55906 4.15161 6.88406C4.05726 6.63477 3.74879 5.60692 4.24597 4.27994C5.00444 4.03065 6.75 5.31545 6.75 5.31545C7.47581 5.10068 8.25605 4.98945 9.02903 4.98945C9.80202 4.98945 10.5823 5.10068 11.3081 5.31545C11.3081 5.31545 13.0536 4.02681 13.8121 4.27994C14.3093 5.61076 14.0008 6.63477 13.9065 6.88406C14.4871 7.56289 14.8427 8.09215 14.8427 9.143C14.8427 12.844 12.7052 13.1393 10.6766 13.3809C11.0105 13.6839 11.2935 14.2592 11.2935 15.1605C11.2935 16.4529 11.2827 18.0522 11.2827 18.3667C11.2827 18.616 11.4496 18.919 11.9105 18.8308C15.5395 17.5575 18 13.9179 18 9.6646C18 4.34514 13.9173 0.306641 8.88387 0.306641ZM3.52742 13.5343C3.48024 13.5727 3.49113 13.6609 3.55282 13.7338C3.61089 13.7951 3.69435 13.822 3.74153 13.7721C3.78871 13.7338 3.77782 13.6456 3.71613 13.5727C3.65806 13.5113 3.5746 13.4845 3.52742 13.5343ZM3.13548 13.2237C3.11008 13.2735 3.14637 13.3349 3.21895 13.3733C3.27702 13.4116 3.3496 13.4001 3.375 13.3464C3.4004 13.2966 3.36411 13.2352 3.29153 13.1968C3.21895 13.1738 3.16089 13.1853 3.13548 13.2237ZM4.31129 14.589C4.25323 14.6389 4.275 14.7539 4.35847 14.8268C4.44194 14.915 4.54718 14.9265 4.59435 14.8652C4.64153 14.8153 4.61976 14.7002 4.54718 14.6274C4.46734 14.5392 4.35847 14.5277 4.31129 14.589ZM3.89758 14.0252C3.83952 14.0636 3.83952 14.1633 3.89758 14.2515C3.95565 14.3397 4.05363 14.3781 4.10081 14.3397C4.15887 14.2899 4.15887 14.1902 4.10081 14.102C4.05 14.0137 3.95565 13.9754 3.89758 14.0252Z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="relative z-10 self-center lg:self-end">
                <img src="~/static/img/hero-pic.jpg" class="hero-profil-pic" width="420px" height="485" alt="françois parrou photo de profil" loading="lazy">
                <img src="~/static/img/element-hero.png" class="absolute top-0 left-0 hero-element" width="420px" height="485" alt="element de décoration" loading="lazy">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            screenLg: false,
        }
    },
    mounted(){
        const gsap = this.$gsap
        const responsive = window.matchMedia("(max-width: 1024px)")
        const heroImg = gsap.timeline()
        this.screenLg = responsive.matches

        if(!this.screenLg){
            heroImg
            .from('.hero-profil-pic', { opacity:0, y:100, duration:0.7 })
            .from('.hero-element', { opacity:0, duration: 1 })
            .to('.hero-btn', { duration:0.5, boxShadow: '0 0 5px rgba(208, 242, 38, 0.77), 0 0 10px rgba(208, 242, 38, 0.77), 0 0 30px rgba(208, 242, 38, 0.77), 0 0 40px rgba(208, 242, 38, 0.77)', yoyo:true, repeat:1, ease: 'Power4. easeOut' })
        }
    },
}
</script>