<template>
  <div>
    <PostForm :post="post" @onSubmit="onSubmit"/> 
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

  // created () {
  //   this.$route.params.id && posts.get(this.$route.params.id)
  //     .then((response) => {
  //       this.post = response.data
  //     })
  // },
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
