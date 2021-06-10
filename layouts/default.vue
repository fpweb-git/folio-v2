<template>
  <div class="overflow-hidden">
    <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="scss">

html {
    font-family:
    'Poppins',
    sans-serif,
    'Helvetica Neue';
    font-size: 16px;
    font-weight: 400;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #18191F;
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
      color: black;
    }
}
</style>
