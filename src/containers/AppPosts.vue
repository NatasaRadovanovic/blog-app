<template>
  <div>
   <Posts :posts="posts"
          @remove="deletePost" />
  </div>
</template>

<script>

import Posts from '../components/Posts.vue'
import { posts } from '../services/Posts.js'

export default {
  name: 'app',
  components: {
    Posts,
  },

  data(){
      return{
          posts:[],
      }
  },

 beforeRouteEnter (to, from, next) { 
      posts.getAll()
      .then(response =>{
       next(vm => {
         vm.posts = response.data
       }) 
      })
      .catch(err => console.log(err))
    },
  
  methods:{
    deletePost(post){
      posts.delete(post.id)
      .then(response =>{
        this.posts = this.posts.filter(p => p.id !== post.id )
      })
    }
  }

}
</script>

<style>

</style>
