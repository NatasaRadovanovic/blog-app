<template>
   <div><br>
       <h1 v-if="(!this.$route.params.id)">Add post</h1>
        <h1 v-else>Edit post</h1>
    <form class="formWrapp" @submit.prevent="onSubmit" @reset='reset'>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="title" class="form-control" id="title" aria-describedby="emailHelp" 
            placeholder="Title" v-model="post.title">
        </div>
        <div class="form-group">
            <textarea rows="6" cols="50" class="form-control" id="text"
             placeholder="Write post..." v-model="post.text"></textarea>
        </div>
       <button v-if="(this.$route.params.id)" class="btn btn-success" >Done</button>  
        <button v-else class="btn btn-success">Submit</button>
        <input class="btn btn-danger" type="reset" value="Reset" />
        </form>
    </div>
</template>

<script>

export default {
  name: 'PostForm',
  props:{
      post:Object
  },
  
  methods:{
      onSubmit(){
          this.$emit('onSubmit')
      },
      reset(){
          this.$emit('reset')
      },
  }
}
</script>

<style>
    .formWrapp{
        width:50%;
        margin:0 auto;
    }
</style>
