<template>
   <div><br>
       <h1 style="text-align:center" v-if="(!this.$route.params.id)">Add post</h1>
        <h1 style="text-align:center" v-else>Edit post</h1>
    <form class="formWrapp" @submit.prevent="onSubmit" @reset='reset' >
        <div class="form-group">
            <label for="title">Title</label>
            <input v-validate.initial="'required|min:2'" autofocus name="title" type="text" class="form-control" id="title" aria-describedby="emailHelp" 
            placeholder="Title" v-model="post.title">
            <div class="helo-block alert alert-danger"  v-show="errors.has('title')">
                {{ errors.first('title') }}
            </div>
        </div>
        <div class="form-group">
        <editor api-key="bagzc7fxx17zvfepjyh5tkns7b8d8p8ce6muu50affxpvjmi" :init="{plugins: 'wordcount'}" v-model="post.text"></editor>
        </div> 
       <button v-if="(this.$route.params.id)" class="btn btn-success" @click='editPost' >Edit</button>  
        <button v-else class="btn btn-success" :disabled="errors.items.length !== 0">Submit</button>
        <input class="btn btn-danger" type="reset" value="Reset" />
        </form>
    </div>
</template>

<script>

import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'PostForm',
  props:{
      post:Object
  },
   components: {
    'editor': Editor 
  },
   
  methods:{
      onSubmit(){
          console.log(this.errors);
         if(this.errors.items.length !== 0){
             
            return;
       }
          this.$emit('onSubmit')
      },
      reset(){
          this.$emit('reset')
      },

      editPost(){
          this.$emit('editPost')
      }
  }
}
</script>

<style>
    .formWrapp{
        width:50%;
        margin:0 auto;
    }
</style>
