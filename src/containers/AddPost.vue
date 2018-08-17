<template>
  <div>
    <PostForm :post='post' 
              @onSubmit='onSubmit'
              @reset='reset'
              @editPost='editPost'/> 
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
 
 created(){
    if(this.$route.params.id){
      posts.get(this.$route.params.id)
      .then(response => (this.post = response.data))
      .catch(err => console.log(err))
    }
  },
 
 methods: {
     onSubmit(){
       this.$route.params.id ? this.editPost() : this.addPost()
      },

  addPost(){
       posts.add(this.post)
      .then(response => {
        this.$router.push('/posts')
      })
       .catch(err => console.log(err))
  },

  editPost(){
    posts.edit(this.post)
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
