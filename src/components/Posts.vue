<template>
   <div class="row">
    <div v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
        <router-link :to="{name: 'single-post', params: {id:post.id} }">View Post</router-link>
        <router-link :to="{name: 'add-post', params: {id:post.id} }">Edit</router-link>
      </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Posts',
  props: {
      posts: Array,
  }

}
</script>

<style>

</style>
