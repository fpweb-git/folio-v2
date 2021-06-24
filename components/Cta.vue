<template>
    <section class="h-80 flex flex-col justify-center items-center bg-white" id="cta-box">
        <h2 class="text-3xl md:text-4xl font-extrabold text-blue text-center">Une question ?<br class="block sm:hidden"> Un projet ?</h2>
        <button @click="$nuxt.$emit('show-form')" class="dark-btn cta-banner-btn mt-10">Contactez-moi</button>
    </section>
</template>

<script>
export default {
    mounted(){
        const gsap = this.$gsap
        const stackAnim = gsap.timeline({
            scrollTrigger : {
                trigger: '#cta-box',
                start : 'center bottom',
            },
        })

        stackAnim
        .from('.cta-banner-btn', { opacity:0, scale: 0.5, transformOrigin: "center center", ease: 'Elastic.easeOut.config(1, 0.5)' })
    },
}
</script>