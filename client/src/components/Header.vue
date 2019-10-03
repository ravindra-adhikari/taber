<template>

    <v-app-bar  app class="indigo darken-2 mt-40" >
      <v-toolbar-title class="mr-4 white--text large">
          TABBER
      </v-toolbar-title>
     <div class="flex-grow-1"></div>
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/about">About</router-link>
         </div>
  </v-app-bar>

</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            hideOnScroll: false,
        }
    }

}
</script>

<style>

</style>