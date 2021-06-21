<template>
    <div class="flex justify-between my-10 flex-col sm:flex-row">
        <div class="flex">
            <img src="~/static/img/availability-avatar.png" alt="">
            <div class="flex flex-col ml-3">
                <NuxtLink class="font-medium" to="/" rel="author">François Parrou</NuxtLink>
                <small class="text-gray-400" >{{ formatDate(date) }}</small>
            </div>
        </div>
        <div class="flex items-center space-x-5 mr-3 mt-6 sm:mt-0">
            <div class="dark:text-darkmode-text">Partager :</div>
            <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=&source=`" target="_blank" rel="noopener" class="share-icon">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.02911 17.1819H0.297321V5.71076H4.02911V17.1819ZM2.16121 4.14599C0.967902 4.14599 0 3.20252 0 2.06346C8.54116e-09 1.51632 0.227698 0.991599 0.633002 0.604718C1.03831 0.217836 1.58802 0.000488281 2.16121 0.000488281C2.73439 0.000488281 3.2841 0.217836 3.68941 0.604718C4.09471 0.991599 4.32241 1.51632 4.32241 2.06346C4.32241 3.20252 3.35411 4.14599 2.16121 4.14599ZM17.996 17.1819H14.2722V11.5978C14.2722 10.267 14.2441 8.56033 12.332 8.56033C10.3918 8.56033 10.0945 10.0062 10.0945 11.502V17.1819H6.3667V5.71076H9.9458V7.27553H9.99804C10.4963 6.37425 11.7133 5.42312 13.5289 5.42312C17.3057 5.42312 18 7.79712 18 10.8806V17.1819H17.996Z" fill="#2F2E8B"/>
                </svg>
            </a>
            <a :href="`http://www.twitter.com/share?url=${url}`" target="_blank" rel="noopener" class="share-icon">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1497 5.81884C16.1612 5.99326 16.1612 6.16773 16.1612 6.34215C16.1612 11.6624 12.4493 17.7925 5.66497 17.7925C3.57486 17.7925 1.63325 17.1321 0 15.9859C0.296965 16.0233 0.582469 16.0357 0.890859 16.0357C2.61545 16.0357 4.20303 15.4003 5.4708 14.3163C3.84898 14.2789 2.48984 13.1202 2.02155 11.5253C2.25 11.5627 2.47841 11.5876 2.71828 11.5876C3.04949 11.5876 3.38073 11.5378 3.68909 11.4506C1.99874 11.0768 0.730934 9.45705 0.730934 7.50089V7.45107C1.22203 7.75011 1.79314 7.937 2.39843 7.96189C1.40477 7.23921 0.753785 6.00573 0.753785 4.61024C0.753785 3.86268 0.936492 3.1774 1.25631 2.57934C3.0723 5.02142 5.80201 6.61622 8.86289 6.79068C8.8058 6.49165 8.77152 6.18019 8.77152 5.8687C8.77152 3.65086 10.4162 1.84424 12.4606 1.84424C13.5228 1.84424 14.4822 2.33016 15.156 3.11512C15.9898 2.94069 16.7893 2.60427 17.4974 2.14327C17.2233 3.07776 16.6408 3.86272 15.8756 4.36107C16.618 4.27389 17.3375 4.04957 17.9999 3.73811C17.4975 4.53549 16.8693 5.24566 16.1497 5.81884Z" fill="#2F2E8B"/>
                </svg>
            </a>
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank" rel="noopener" class="share-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.3516 3.46957 16.9587 7.6377 17.6133V11.5204H5.42285V9H7.6377V7.07906C7.6377 4.8941 8.93848 3.68719 10.9308 3.68719C11.8849 3.68719 12.8827 3.85734 12.8827 3.85734V6.00188H11.783C10.7002 6.00188 10.3623 6.67406 10.3623 7.36348V9H12.7804L12.3936 11.5204H10.3623V17.6133C14.5304 16.9587 17.7188 13.3516 17.7188 9Z" fill="#2F2E8B"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props :{
        date : String,
        url : String,
        title : String
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('fr', options)
        }
    },
}
</script>

<style lang="scss" scoped>
.share-icon:hover svg path{
    transition: all 300ms ease-in-out;
    fill: #507CED;
}
</style>
