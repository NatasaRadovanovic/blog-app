<template>
  <div class="row">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.text }}</p>
       <div>{{ post.createdAt|formatDate }}</div>
      </div>
    </div>
</template>

<script>
 
 import { DateMixin } from '../mixins'

 export default {
  name: 'PostDetail',
  props:['post'],
  mixins: [DateMixin],
}
</script>
   
<style>

</style>
