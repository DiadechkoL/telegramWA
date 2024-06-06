<script>


export default{
    name: 'App',
  

   
}


</script>

<template>
    <div>
      <nav>
      <router-link to="/first">FirstPage</router-link>
      <router-link to="/second">Second Page</router-link>
      <router-link to="/third">Third Page</router-link>
    </nav>
    <router-view />
</div>

</template>



<style>

</style>
