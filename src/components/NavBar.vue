<template>
  <nav class="navbar navbar-expand-lg">
    <div class="navbar-brand">Blog App</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
           <router-link  to="/posts" class="nav-item nav-link posts">Posts</router-link>
        </li>
        <li class="nav-item">
           <router-link  to="/add" class="nav-item nav-link add">Add</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style>
  .navbar, .navbar-expand-lg {
    background-color:#a35993;
  }
  .nav-item,.posts, .add ,.navbar-brand{
    color:white;
  }
 
</style>
