<template>
  <Main/>
  <Footer/>
</template>
<script>

import Main from '@/components/Main-Main.vue'
import Footer from '@/components/Footer-Base.vue'

export default {
  components: {
    Main,
    Footer
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
a{
  text-decoration: none;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  width: 1440px;
  margin: 3px auto; 
}
@media only screen and (max-width: 1440px){
 .container{
    width: 100vw;
    margin: 3px 0; 
 }
}
</style>
