<template>
    <div class="container">
        <div class="navBar">
            <router-link  :to="'/'"  class="link">
                <h4>&#9668;&nbsp;back to posts</h4>
            </router-link>
        </div>
        <OnePostBody />    
    </div>
</template>

<script>
    import OnePostBody from '@/components/One-Post-Body.vue'

    export default {
        name: 'One-Post',
        components: {
            OnePostBody
        },

    }
</script>

<style scoped>
    .navBar{
        width: 100%;
        display: flex;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .link{
        color:grey;
        display: block;
        margin-left: 15px;
    }
    .link:hover{
        color: black;
        text-width: bold;
    }
</style>