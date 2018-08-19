<template>
   <div>
    <h3>Comments</h3>
    <li class="list-group-item" v-for="comment in comments" :key="comment.id">
        {{ comment.text }} 
       <div> {{ comment.createdAt|diffForHumans}}</div>
    </li>    
    </div>
</template>

<script>

import { DateMixin } from '../mixins'

export default {
  name: 'CommentList',
  props:{
      comments:Array
  },
    mixins: [DateMixin]
}
</script>

<style>

</style>
