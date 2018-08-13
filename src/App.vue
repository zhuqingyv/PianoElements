<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  	
  }
};
</script>

<style>
*{
  margin:0;
  padding:0;
  moz-user-select: -moz-none; 
  -moz-user-select: none; 
  -o-user-select:none; 
  -khtml-user-select:none; 
  -webkit-user-select:none; 
  -ms-user-select:none; 
  user-select:none;
}
html,body{
  width:100%;
  height:100%;
}
</style>
