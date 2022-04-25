<template>
  <header>
    <router-link  :to="'/'"  class="link">
        <img :src="require('@/assets/img/news.jpg')" alt="news"/>
    </router-link>
</header>
</template>

<script>
    export default {
        name: 'Header-Base'
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 70px;
        background-color: grey;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .link{
        display: block;
        height: 96%;
        width: 193.5px; 
        margin: 2% 0 2% 15px;
    }
    img{
        height: 100%;
        width: auto;
    }

</style>