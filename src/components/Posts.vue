<template>
   <div class="row">
    <div class="postWrapp" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
        <p style="color: #999999">Comments: {{post.comments.length}}</p>
        <div>{{ post.createdAt|formatDate }}</div>
        <router-link :to="{name: 'single-post', params: {id:post.id}}">View Post</router-link>
        <router-link :to="{name: 'add-post', params: {id:post.id}}">Edit</router-link>
       <button class="btn btn-danger btn-sm" @click="removePost(post)" >Delete </button>
      </div>
      </div>
    </div>
</template>

<script>

import { posts } from '../services/Posts'
import { DateMixin } from '../mixins'

export default {
  name: 'Posts',
  props: {
      posts: Array,
  },
  mixins: [DateMixin],
  methods:{
    removePost(post){
      this.$emit('remove',post);
    }
   
  }
}
</script>

<style>
  .postWrapp{
    width:90%;
    margin:0 auto;
  }
</style>
