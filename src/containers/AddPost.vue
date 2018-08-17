<template>
  <div>
    <PostForm :post='post' @onSubmit='onSubmit'/> 
  </div>
</template>

<script>

import PostForm from '../components/PostForm.vue'
import { posts } from '../services/Posts.js'

export default {
  name: 'AddPost',
  components: {
    PostForm,
  },

  data(){
      return{
          post:{}
      }
  },
 methods: {
     onSubmit(){
        posts.add(this.post)
      .then(response => {
        this.$router.push('/posts')
      })
       .catch(err => console.log(err))
    },
  }
}
</script>

<style>

</style>
