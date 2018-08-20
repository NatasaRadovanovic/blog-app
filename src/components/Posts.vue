<template>
   <div class="row">
    <div class="postWrapp" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <div><span style="color: #999999"><i class="far fa-clock"></i> Created at:</span> {{ post.createdAt|formatDate }}</div><br>
        <div style="color: #999999"><i class="far fa-comments"></i> Comments: {{post.comments.length}}</div><br>
        <p class="card-text">{{ post.text }}</p>
        <div>
          <router-link  class="btn btn-link" :to="{name: 'single-post', params: {id:post.id}}">
          <i class="fas fa-search"></i> View Post</router-link>
          <router-link class="btn btn-link" :to="{name: 'add-post', params: {id:post.id}}">
          <i class="fas fa-edit"></i> Edit</router-link>
          <button class="btn btn-link" @click="removePost(post)" >
          <i class="far fa-trash-alt"></i> Delete </button>
          <hr></hr>
        </div>
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
      let deleteConfirm = confirm('Are you sure you want to delete this post?');
      if(!deleteConfirm){
        return;
      }
      this.$emit('remove',post);
    }
  }
}
</script>

<style>
  .postWrapp{
    width:100%;
    margin:0 auto;
    background-color:#fce5f7;
  }

  .card-title{
    font-size:1.8rem;
  }

  .btn-link{
    color:#353638;
  }

  .btn-link:hover{
    color:#353638;
    font-weight:bold;
    text-decoration:none;
  }
</style>
