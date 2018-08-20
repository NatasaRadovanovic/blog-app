<template>
  <div class="postWrapp"><br>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <div><i class="far fa-clock"></i> {{ post.createdAt|formatDate }}</div><br>
        <p class="card-text">{{ post.text }}</p>
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
