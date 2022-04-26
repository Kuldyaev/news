 <template>
  <h3>posts</h3>
  <div class="actionPanel container">
    <div class="authorBox">
      <label>Author:</label>
      <select class="form" v-model="author">
          <option
            v-for="item in options"
            v-bind:key="item.id"
            v-bind:value="item.id"
            v-text="item.text"
          ></option>
        </select>
    </div>
    <div class="sortBtns">
      <button @click="sortAz"> A-z</button>
      <button @click="sortZa" style="margin-left: 5px;">z-A</button>
    </div>
  </div>
  <div class="container">
    <div class="postCard center" v-for="post of this.filteredPosts" :key="post.id">
      <PostCard :post=post />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/Post-Card.vue'

export default {
  name: 'Home-Main',
  data(){
    return {
      author: 'all',
      optionsBase: [
        { text: 'all', id: 0}
      ]
    }
  },
  components: {
    PostCard
  },
  computed: {
    ...mapState({
      posts: state => state.Posts.posts,
      users: state => state.Users.users
    }),
    options(){
      let optionsIndexList=[];
      let optionsList=this.optionsBase;
      this.posts.map(post=>{
        if (!optionsIndexList.includes(post.userId)){
           optionsIndexList.push(post.userId);
        }
      });
      optionsIndexList.forEach(indx => {
        let newUsername = this.users.filter(user => user.id == indx)[0].username;
        let newItem = {
          text:  newUsername,
          id: indx
        };
        optionsList.push(newItem);
      });
      return optionsList;
    },
    filteredPosts(){
      if (this.author === 'all' || this.author === 0){
        return this.posts;
      } else {
        let myPosts = this.posts.filter(post => post.userId == this.author);
        return myPosts;
      }
    }
  },
   methods: {
    sortAz () {
      this.$store.commit('Posts/sortAz')
    },
    sortZa () {
      this.$store.commit('Posts/sortZa')
    }
  },
  beforeMount () {
    this.$store.dispatch('Users/fetchAllUsers',{}),
    this.$store.dispatch('Posts/fetchAllPosts',{})
  }
}
</script>

<style scoped>
  .actionPanel{
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }
</style>