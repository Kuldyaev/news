<template>
  <router-link class="postCard" :to="'/post/' + post.id">
    <div class="authority center">
      author:  {{ author }}
    </div>
    <div class="postTitle">
        {{ post.title }}
    </div>   
  </router-link>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Post-Card',
        props: ['post'],
        computed: {
            ...mapState({
            users: state => state.Users.users
            }),
            author(){
                let author = 'guest';
                author = this.users.filter(user => user.id == 1)[0].username;
                return author;
            }
        }
    }
</script>

<style scoped>
    .postCard{
        display: block;
        width:96%;
        margin-left: 2%;
        margin-bottom: 5px;
        border: 1px solid grey;
        border-radius: 5px;
        display: flex;
        color: black;
        opacity: 0.7;
    }
    .postCard:hover{
        opacity: 1;
    }
    .authority{
        width: 30%;
    }
</style>