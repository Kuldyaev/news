<template>
    <div class="commentCard center" v-for="comment of this.comments" :key="comment.id">
        <div class="commentHeader">
            <div class="commentsEmail center">
                {{ comment.email }}
            </div>
            <div class="commentsName center">
                {{ comment.name }}
            </div>
        </div>
        <div class="commentBody">
            {{ comment.body }}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'One-Post-Comments',
        computed:{
             ...mapState({
                comments: state => state.Comments.comments
            }),
        },
        beforeMount () {
            this.$store.dispatch('Comments/fetchAllComments',{post: this.$route.params.id})
        }
    }
</script>

<style scoped>
    .commentCard{
        width: 98%;
        margin-left: 1%;
        border: 2px solid grey;
        background-color: silver;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }
    .commentHeader{
        display: flex;
        width: 100%;
        border-bottom: 1px solid grey;
    }
    .commentsEmail, .commentsName{
        width: 50%;
    }
</style>