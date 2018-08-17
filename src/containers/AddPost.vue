<template>
  <div>
<<<<<<< HEAD
    <PostForm :post='post' 
              @onSubmit='onSubmit'
              @reset='reset'/> 
=======
    <PostForm :post="post" @onSubmit="onSubmit"/> 
>>>>>>> 22c03bd65f70980b4e03ebab026794c4bed388fd
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
<<<<<<< HEAD
          post:this.getDefaultPost()
      }
  },
=======
          post:{}
      }
  },

  // created () {
  //   this.$route.params.id && posts.get(this.$route.params.id)
  //     .then((response) => {
  //       this.post = response.data
  //     })
  // },
>>>>>>> 22c03bd65f70980b4e03ebab026794c4bed388fd
 methods: {
     onSubmit(){
        posts.add(this.post)
      .then(response => {
        this.$router.push('/posts')
      })
       .catch(err => console.log(err))
    },
<<<<<<< HEAD

    reset(){
      this.post = this.getDefaultPost()
    },

    getDefaultPost(){
      return {
        title:'',
        text:''
      }
    }
=======
>>>>>>> 22c03bd65f70980b4e03ebab026794c4bed388fd
  }
}
</script>

<style>

</style>
