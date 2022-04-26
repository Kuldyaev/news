 <template>
  <h3>posts</h3>
  <div class="container">
    <div class="postCard center" v-for="post of this.posts" :key="post.id">
      <PostCard :post=post />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/Post-Card.vue'

export default {
  name: 'Home-Main',
  components: {
    PostCard
  },
  computed: {
    ...mapState({
      posts: state => state.Posts.posts
    })
  },
  beforeMount () {
    this.$store.dispatch('Posts/fetchAllPosts',{})
  }
}
</script>

<style scoped>

</style>

this.$store.dispatch('fetchAllPhotos')