<template>
  <footer>
    <div class="footerBlock">
        Created by <i><a href="https://www.kuldyaev.ru" class="myWeb">Viacheclav Kuldyaev</a></i> &#169;  2022
    </div>
</footer>
</template>

<script>
    export default {
        name: 'Footer-Base'
    }
</script>

<style scoped>
    footer{
        flex-shrink: 0;
        width: 100%;
        background-color: grey;
        display: flex;
        justify-content: right;
        align-items: center;
        min-height: 40px;
    }
    a{
        color: silver;
    }
    .footerBlock{
        color: silver;
        margin-right: 10px;
    }
</style>