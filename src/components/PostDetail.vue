<template>
  <div class="row">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
      </div>
    </div>
</template>

<script>
 
 export default {
  name: 'PostDetail',
  props:['post'],
}
</script>
   
<style>

</style>
