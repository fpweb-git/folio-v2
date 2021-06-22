<template>
    <div class="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 z-50 transition" id="contact-form">
        <div class="fixed h-screen w-full mx-auto flex justify-center items-center">
            <div class="form-container bg-white border border-gray-300 rounded-lg shadow-lg p-6 sm:p-12 ">
                <div class="flex justify-between items-center">
                    <h2 class="text-deepdark relative flex flex-col text-4xl font-extrabold text-left">Contact</h2>
                    <button aria-label="Fermer le formulaire" @click="closeForm" class="cursor-pointer cross-icon">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.125 8.81375L24.1863 6.875L16.5 14.5613L8.81375 6.875L6.875 8.81375L14.5613 16.5L6.875 24.1863L8.81375 26.125L16.5 18.4387L24.1863 26.125L26.125 24.1863L18.4387 16.5L26.125 8.81375Z" fill="black"/>
                        </svg>
                    </button>
                </div>
                <p class="mt-4 mb-1 sm:mb-3 text-left text-gray-600 text-xs sm:text-base">Une question ? un projet ? <br>Je vous réponds au plus vite !</p>
                <form action="/success" name="contactus" method="post" netlify netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contactus" />
                    <div class="mt-5 sm:mt-10">
                        <label for="name" class="block text-sm font-medium">
                            Nom :
                        </label>
                        <div class="mt-2">
                            <input required type="text" name="name" class="shadow-sm focus:ring-blue focus:border-blue mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-sm" placeholder="Entrez votre nom">
                        </div>
                    </div>
                    <div class="mt-4 sm:mt-6">
                        <label for="email" class="block text-sm font-medium">
                            Email :
                        </label>
                        <div class="mt-2">
                            <input required type="text" name="email" class="shadow-sm focus:ring-blue focus:border-blue mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-sm" placeholder="Entrez votre email">
                        </div>
                    </div>
                    <div class="mt-4 sm:mt-10">
                        <label for="message" class="block text-sm font-medium">
                            Message :
                        </label>
                        <div class="mt-2">
                            <textarea required name="message" rows="3" class="shadow-sm focus:ring-blue focus:border-blue mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-sm" placeholder="Votre message..."></textarea>
                        </div>
                    </div>
                    <div class="my-8 sm:mt-16">
                        <button class="my-5 w-full flex justify-center items-center text-white py-3 border bg-dark hover:text-lime rounded font-medium">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closeForm(){
            const form = document.querySelector('#contact-form')
            form.classList.add('hidden')
        }
    },
}
</script>

<style lang="scss" scoped>
.form-container{
    width: 550px;
    max-height: 650px;
}

.cross-icon:hover svg path{
    transition: all 200ms ease-in-out;
    fill: #FF6B60;
}

@media only screen and (max-width: 600px) {
    .form-container{
        width: 300px;
        max-height: 90vh;
    }
}

</style>