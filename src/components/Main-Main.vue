
<template>
  <main class="main column">
    <Header/>
    <router-view/>
  </main>
</template>

<script>
import Header from '@/components/Header-Base.vue'

export default {
  name: 'Main-Main',
  components: {
    Header
  }
}
</script>

<style scoped>
.main{
  flex-grow: 1;
}
</style>