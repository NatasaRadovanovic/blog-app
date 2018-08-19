<template>
  <div>
   <PostDetail :post="post"/>
   <CommentList :comments="comments"/>
   <CommentForm @submitComment="onSubmit"/>
  </div>
</template>

<script>

import CommentForm from '../components/CommentForm.vue'
import CommentList from '../components/CommentList.vue'
import PostDetail from '../components/PostDetail.vue'
import { posts } from '../services/Posts.js'

export default {
  name: 'app',
  components: {
    PostDetail,
    CommentForm,
    CommentList,
  },
 
 data(){
     return{
        post: {
        title: '',
        text: '',
        createdAt: '',
        comments: []
      },
    }
 },
computed: {
    comments() {
      return this.post.comments ? this.post.comments.reverse() : []
    }
  },
 created(){
    if(this.$route.params.id){
      posts.get(this.$route.params.id)
      .then(response => (this.post = response.data))
      .catch(err => console.log(err))
    }
  },

  methods:{
     onSubmit(comment) {
      posts.addComment(comment, this.post.id).then(response => {
        posts.get(this.post.id).then(response => { //???
          this.post = response.data
        })
      })
    },
  }
}
</script>

<style>

</style>
