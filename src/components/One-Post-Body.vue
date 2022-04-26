<template>
    <div class="postBody">
        <div class="postHeader">
            <div class="postAuthor center">
               author:&nbsp;{{ author.name }}
            </div>
            <div class="postAuthor center">
               email:&nbsp;{{ author.email }}
            </div>
            <div class="postTitle center">
               title:&nbsp;{{ post.title }}
            </div>
        </div>
        <div class="postText center">
            {{ post. body }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'One-Post-Body',
        computed:{
            post () {
                return this.$store.getters['Posts/posts'].filter((post) => post.id == this.$route.params.id)[0]
            },
            author(){
                return this.$store.getters['Users/users'].filter((user) => user.id == this.post.userId)[0]
            }
        }
    }
</script>

<style scoped>
  .postBody{
      width: 98%;
      margin-left: 1%;
      border: 2px solid grey;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
  }
  .postHeader{
      width: 100%;
      border-bottom: 2px solid grey;
      display: flex;
      min-height: 30px;
  }
  .postText{
      width: 100%;
      text-align: left;
      padding: 2px 5px;
      min-height: 50px;
  }
  .postAuthor{
      width: 20%;
  }
  .postTitle{
      width: 60%;
  }
</style>