<template>
    <footer>
        <div class="container footerBlock">
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
        align-items: center;
        justify-content: center;
        min-height: 40px;
    }
    a{
        color: silver;
    }
    .footerBlock{
        color: silver;
        text-align: right;
        padding-right: 10px;
    }
</style>