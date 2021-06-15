<template>
    <button @click="scrollTop" aria-label="Revenir en haut de page" class="top-button flex justify-center items-center h-14 w-14 rounded-md bg-deepdark fixed bottom-0 right-0 m-5 z-40 shadow-md">
        <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.4675 13L10.5 4.96491L18.5325 13L21 10.5263L10.5 0L0 10.5263L2.4675 13Z" fill="#D0F224"/>
        </svg>
    </button>
</template>

<script>
export default {
    // props:{
    //     idTrigger: {
    //         type: String,
    //         default: () => null,
    //     },
    // },
    mounted(){
    const gsap = this.$gsap

    let goTopTl = gsap.timeline({
        scrollTrigger : {
            trigger: '#navbar',
            start : 'bottom top',
            end : 'bottom top',
            toggleActions: "play none reverse none",
        },
    })

    goTopTl
    .from('.top-button', { x:50, opacity : 0, duration:0.3, ease: 'Elastic.easeOut.config(1, 0.5)' })
    },
    methods:{
        scrollTop(){
            window.scrollTo({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
        }
    }
}
</script>
