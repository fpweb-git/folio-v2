<template>
  <div class="overflow-hidden">
    <div v-if="!pageIsLoaded " class="fixed w-full h-full bg-white z-50"></div>
    <Navbar />
    <Availability />
    <Nuxt />
    <Gotop />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
        return {
            pageIsLoaded : false
        }
    },
  mounted(){ 
    window.addEventListener("load", () => {
      this.pageIsLoaded  = true
    });
  }
}
</script>

<style lang="scss">

html {
    font-family:
    'Poppins',
    sans-serif,
    'Helvetica Neue';
    font-size: 16px;
    font-weight: 400;
    word-spacing: 1px;
    box-sizing: border-box;
    color: #15141B;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a{
    color: unset;
    text-decoration: unset;
}

button:focus {
	outline: 0;
}

.main-container{
  max-width: 1219px;
  margin: 0 auto;
}

.lime-btn-out{
  border: 2px solid #D0F224;
  padding: 0.25rem 1.5rem;
  color: #D0F224;
  border-radius: 6px;
  transition: all ease 300ms;
    &:hover{
      background: #D0F224;
      color: #15141B;
    }
}

.lime-btn{
  background: #D0F224;
  padding: 0.85rem 1.5rem;
  color: #15141B;
  border-radius: 10px;
  transition: all ease 300ms;
  font-weight: 600;
  font-size: 18px;
    &:hover{
      background: white;
    }
}

.dark-btn{
  background: #15141B;
  padding: 0.85rem 1.5rem;
  color: white;
  border-radius: 10px;
  transition: all ease 300ms;
  font-weight: 600;
  font-size: 18px;
    &:hover{
      color: #D0F224;
    }
}

.nav-links{
    transition: all 200ms ease;
    &:hover{
        border-bottom: 1px solid #D0F224;
    }
}
</style>
