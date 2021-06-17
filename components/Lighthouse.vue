<template>
    <div id="perf-counter" class="bg-deepdark p-6 sm:p-10 rounded-2xl shadow-lg grid grid-cols-2 grid-rows-2 gap-6 md:flex space-x-0 md:space-x-6 justify-center max-w-full">
        <div class="w-auto md:w-32">
            <div class="relative flex items-center justify-center">
                <svg height="100" width="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" fill="rgba(0, 0, 0, 0)" stroke="#15141B" stroke-width="5" stroke-linecap="round"/>
                    <circle class="loader-ring" cx="60" cy="60" r="50" fill="none" stroke="#D0F224" stroke-width="5" stroke-dasharray="629" stroke-linecap="round" stroke-dashoffset="629"/>
                </svg>
                <span class="perfnumber absolute text-lime font-mono text-3xl">0</span>
            </div>
            <span class="text-white inline-block mt-2 font-medium w-full text-sm text-center">Performances</span>
        </div>

        <div class="w-auto md:w-32">
            <div class="relative flex items-center justify-center">
                <svg height="100" width="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" fill="rgba(0, 0, 0, 0)" stroke="#15141B" stroke-width="5" stroke-linecap="round"/>
                    <circle class="loader-ring" cx="60" cy="60" r="50" fill="none" stroke="#D0F224" stroke-width="5" stroke-dasharray="629" stroke-linecap="round" stroke-dashoffset="629"/>
                </svg>
                <span class="perfnumber absolute text-lime font-mono text-3xl">0</span>
            </div>
            <span class="text-white inline-block mt-2 font-medium w-full text-sm text-center">Accessibilité</span>
        </div>

        <div class="w-auto md:w-32">
            <div class="relative flex items-center justify-center">
                <svg height="100" width="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" fill="rgba(0, 0, 0, 0)" stroke="#15141B" stroke-width="5" stroke-linecap="round"/>
                    <circle class="loader-ring" cx="60" cy="60" r="50" fill="none" stroke="#D0F224" stroke-width="5" stroke-dasharray="629" stroke-linecap="round" stroke-dashoffset="629"/>
                </svg>
                <span class="perfnumber absolute text-lime font-mono text-3xl">0</span>
            </div>
            <span class="text-white inline-block mt-2 font-medium w-full text-sm text-center">Bonnes pratiques</span>
        </div>

        <div class="w-auto md:w-32">
            <div class="relative flex items-center justify-center">
                <svg height="100" width="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" fill="rgba(0, 0, 0, 0)" stroke="#15141B" stroke-width="5" stroke-linecap="round"/>
                    <circle class="loader-ring" cx="60" cy="60" r="50" fill="none" stroke="#D0F224" stroke-width="5" stroke-dasharray="629" stroke-linecap="round" stroke-dashoffset="629"/>
                </svg>
                <span class="perfnumber absolute text-lime font-mono text-3xl">0</span>
            </div>
            <span class="text-white inline-block mt-2 w-full text-sm font-medium text-center">SEO</span>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        const gsap = this.$gsap
        const circleProgress = gsap.timeline({
            scrollTrigger : {
                trigger: '#perf-counter',
                start : 'bottom bottom',
            },
        })
        let counter = 0;
        const perfnumber = document.querySelectorAll(".perfnumber");

        circleProgress
        .to('.loader-ring', { strokeDashoffset: 0, duration: 4 }, 'run')
        .add(numberCounter, 'run')
        .to('.loader-ring', { delay: 1, css:{ "filter": "drop-shadow(0 0 5px rgba(208, 242, 38, 0.77)) drop-shadow(0 0 10px rgba(208, 242, 38, 0.77))"}, yoyo:true, repeat:1, ease: 'Power4. easeOut' }, 'run')
        .to('.perfnumber', { delay: 1, textShadow: "0 0 10px rgba(208, 242, 38, 0.77), 0 0 20px rgba(208, 242, 38, 0.77)", yoyo:true, repeat:1, ease: 'Power4.easeOut' }, 'run')

        function numberCounter(){
            setInterval(() => {
                if(counter == 100 ){
                    clearInterval();
                }else{
                    counter+=1;
                    perfnumber.forEach((num)=>{
                        num.textContent = counter;
                    })
                }
            }, 8);
        }
    }
}
</script>
