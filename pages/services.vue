<template>
    <main class="bg-lightgray">
        <div class="main-container py-10 sm:py-20">
            <div class="px-4">
                <h1 class="text-center font-semibold text-lg text-blue mb-3">Mes services</h1>
                <h2 class="text-3xl md:text-5xl font-extrabold text-center max-w-xl mx-auto mb-8">Developpement web freelance</h2>
                <p class="max-w-2xl text-center mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus ornare vestibulum.</p>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 w-max mx-auto gap-14 my-14">
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="site vitrine"
                title="Site vitrine | blog"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus ornare vestibulum."
                />
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="site vitrine"
                title="Site vitrine | blog"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus ornare vestibulum."
                />
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="site vitrine"
                title="Site vitrine | blog"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus ornare vestibulum."
                />
                <ServicesCard 
                :src="require('~/static/img/site-vitrine.jpg')"
                alt="site vitrine"
                title="Site vitrine | blog"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus ornare vestibulum."
                />
            </ul>
        </div>
    </main>
</template>