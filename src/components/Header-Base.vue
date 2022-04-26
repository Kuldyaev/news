<template>
    <header>
        <div class="container">
            <router-link  :to="'/'"  class="link">
                <img :src="require('@/assets/img/news.jpg')" alt="news"/>
            </router-link>
        </div>
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
        height: 70px;
        width: 193.5px; 
        margin: 2% 0 2% 15px;
    }
    img{
        height: 70px;;
        width: auto;
    }

</style>