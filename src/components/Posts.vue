<template>
   <div class="row">
    <div v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
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
