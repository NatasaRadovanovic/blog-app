<template>
    <div><br>
        <h5>Comments</h5>
        <div v-for="comment in comments" :key="comment.id">
            <div class="card-block">
            {{ comment.text }} 
            <div><i class="far fa-clock"></i> {{ comment.createdAt|diffForHumans}}</div>
            </div>
        </div>    
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
 .card-block
    {
        border: 1px solid silver;
        margin-bottom: 5px;
        width: 50%;
        padding: 5px;
        border-radius: 10px;
        box-shadow: 5px 5px 5px grey;
    }

</style>
