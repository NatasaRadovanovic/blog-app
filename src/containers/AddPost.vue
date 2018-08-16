<template>
  <div>
    <PostForm :addPost='newPost'/> 
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
          newPost:{}
      }
  }
}
</script>

<style>

</style>
