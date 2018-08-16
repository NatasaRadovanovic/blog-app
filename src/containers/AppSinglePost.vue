<template>
  <div>
   <PostDetail :post="post"/>
  </div>
</template>

<script>

import PostDetail from '../components/PostDetail.vue'
import { posts } from '../services/Posts.js'

export default {
  name: 'app',
  components: {
    PostDetail,
  },
 
 data(){
     return{
         post:{} 
     }
 },

 created(){
    if(this.$route.params.id){
      posts.get(this.$route.params.id)
      .then(response => (this.post = response.data))
      .catch(err => console.log(err))
    }
  },

    }
</script>

<style>

</style>
