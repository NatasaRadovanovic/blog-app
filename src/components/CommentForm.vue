<template>
   <div>
    <form class="formWrapp" @submit.prevent="onSubmit" >
        <div class="form-group">
            <label for="title">Comment</label>
            <textarea v-validate.initial="'required'" autofocus name="comment"  class="form-control" id="comment"  
            placeholder="Comment" v-model="comment.text"></textarea>
            <div class="helo-block alert alert-danger"  v-show="errors.has('comment')">
                {{ errors.first('comment') }}
            </div>
        </div>
        <button class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
  name: 'CommentForm',
  data(){
      return{
          comment:{
              text:''
          },
      }
  },

  methods:{
      onSubmit(){
          this.$emit('submitComment',this.comment)
            this.comment = {};
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
