<template>
    <div class="availability-widget shadow-xl z-40 cursor-pointer" @click="openWidget($event)">
        <img src="~/static/img/availability-avatar.png" width="40" height="40" alt="avatar disponibilité" class="pointer-events-none">
        <div class="ml-3 pointer-events-none">
            <div class="flex items-center">
                <h3 class="text-sm font-medium">Disponibilité</h3>
                <div class="maru ml-2 rounded-full bg-orange shadow"></div>
            </div>
            <p class="info">
                Disponible très prochainement.<br>
                N’ésitez pas à me contacter.
            </p>
        </div>
    </div>
</template>

<script>

export default {
    mounted(){
        const gsap = this.$gsap
        const widget = document.querySelector('.availability-widget')
        const availabilityEntrance = gsap.timeline()
        const availabilityAnim = gsap.timeline({
            scrollTrigger : {
                trigger: '#navbar',
                start : 'bottom top',
            },
        })

        availabilityEntrance
        .from(widget, { delay:1, duration:0.3, x:195, ease: 'Elastic.easeOut.config(1, 0.5)' })

        availabilityAnim
        .to(widget, { delay:0.1, duration:0.3, x:195, ease: 'Elastic.easeOut.config(1, 0.5)'})

    },
    methods:{
        openWidget(event){
            const gsap = this.$gsap
            const toggleWidget = gsap.timeline()
            if(event.target.style.cssText === 'transform: translate(0px, 0px);'){
                toggleWidget.to('.availability-widget', { duration: 0.3, x:195, ease: 'Elastic.easeOut.config(1, 0.5)'})
            }
            else{
                toggleWidget.to('.availability-widget', { duration: 0.3, x:0, ease: 'Elastic.easeOut.config(1, 0.5)'})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.availability-widget{
    display: flex;
    align-items: center;
    padding-left: 10px;
    background: white;
    position: fixed;
    right: 0;
    top: 50%;
    height: 70px;
    width: 250px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.maru{
    height: 10px;
    width: 10px;
}

.info{
    font-size: 11px;
    color: #424141;
    margin-top: 1px;
}
</style>