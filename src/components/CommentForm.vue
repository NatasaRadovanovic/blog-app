<template>
    <div><br><br>
        <div class="formWrapp">
            <form  @submit.prevent="onSubmit" >
                <div class="form-group">
                    <textarea rows="5" v-validate.initial="'required'" autofocus name="comment"  class="form-control" id="comment"  
                    placeholder="Enter your comment here" v-model="comment.text"></textarea>
                    <div class="helo-block alert alert-danger"  v-show="errors.has('comment')">
                    {{ errors.first('comment') }}
                    </div>
                <Captcha @verify="verify"
                      @expired="expired"
                      ref="captcha"/>
                </div>
                <button class="btn btn-success"  :disabled="!isCaptchaPassed">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>

import Captcha from '../captcha/Captcha'


export default {
  name: 'CommentForm',
    components: {
    Captcha
  },
  data(){
      return{
          comment:{
              text:''
          },

          isCaptchaPassed:false
        }
    },

  methods:{
      onSubmit(){
           if (!this.isCaptchaPassed) {
        return
      }
          this.$emit('submitComment',this.comment)
           this.$refs.captcha.reset()
            this.comment = {};
      },

      verify(){
          this.isCaptchaPassed = true;
      },
      expired(){
          this.isCaptchaPassed = false;
       }
    }
}
</script>

<style>
    .formWrapp{
        width:30%;
        float:left;
    }
</style>
