<template>
  <div>
    <PostForm :post='post' 
              @onSubmit='onSubmit'
              @reset='reset'/> 
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
          post:this.getDefaultPost()
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

    reset(){
      this.post = this.getDefaultPost()
    },

    getDefaultPost(){
      return {
        title:'',
        text:''
      }
    }
  }
}
</script>

<style>

</style>
