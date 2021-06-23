<template>
  <div class="relative overflow-hidden">
    <div v-if="!pageIsLoaded " class="fixed w-full h-full bg-white z-50"></div>
    <Navbar />
    <Availability />
    <Nuxt />
    <ContactForm />
    <Gotop />
    <Cta />
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
  },
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

.content-container{
  max-width: 805px;
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

.nuxt-content{

  .note{
    padding: 1rem;
    margin: 2.5rem 0;
    background: #FAFAFF;
    border-left: 0.5rem solid #2F2E8B;
  }

  p{
      margin-bottom: 1rem;
  }

  a{
    font-weight: 600;
    text-decoration: underline;
    color: #2F2E8B;
  }
  h2{
      font-weight: 800;
      font-size: 36px;
      margin: 3rem 0;
  }
  h3{
      font-weight: 600;
      font-size: 24px;
      position: relative;
      width: fit-content;
      z-index: 10;
      margin: 2rem 0 1.5rem 0;
      &::after{
          content: "";
          position: absolute;
          width:  calc(100% + 10px);
          height: 9px;
          bottom: 6px;
          left: 0px;
          background: #D0F224;
          z-index: -1;
      }
  }

  h4{
      font-size: 20px;
      font-weight: 700;
      color: #2F2E8B;
      margin: 2.5rem 0 1.2rem 0;
  }

  pre{
    margin: 2rem 0;
  }

  img{
    margin: 2.5rem auto;
  }

  @media only screen and (max-width: 768px) {
      h2{
          font-weight: 800;
          font-size: 28px;
          margin: 2.5rem 0 2rem 0;
      }
      h3{
      font-size: 20px;
      margin: 2rem 0 1.5rem 0;
      font-weight: 700;
        &::after{
            height: 7px;
            bottom: 4px;
            width: 100%;
        }
        h4{
            font-size: 18px;
            color: #2F2E8B;
        }
      }
  }
}

// .page-enter-active {
//   transition: opacity 0.4s ease-in-out, transform 0.5s ease;
// }
// .page-enter {
//   opacity: 0;
//   transform: translateY(100px);
// }
</style>
