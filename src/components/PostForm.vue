<template>
   <div><br>
       <h2 style="text-align:center">Add post</h2>
    <form class="formWrapp" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="title" class="form-control" id="title" aria-describedby="emailHelp" 
            placeholder="Title" v-model="addPost.title">
        </div>
        <div class="form-group">
            <textarea rows="6" cols="50" class="form-control" id="text"
             placeholder="Write post..." v-model="addPost.text"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
  name: 'PostForm',
  props:['addPost']
  
}
</script>

<style>
    .formWrapp{
        width:50%;
        margin:0 auto;
    }
</style>
