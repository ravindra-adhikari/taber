<template>

    <v-app-bar app class="indigo darken-2 mt-40" >
      <v-toolbar-title class="mr-4 ml-4 white--text large">
         <v-btn text class="display-1" ><router-link to ='/' class="white--text dispaly-2">TABBER</router-link>  </v-btn> 
      </v-toolbar-title>
     <div class="flex-grow-1"></div>
        <div id="nav">
        <v-btn   text  tile class="indigo lighten-2 mr-2" dark><router-link to="/" class="">Home</router-link> </v-btn>
        <v-btn  tile class="indigo lighten-2 mr-2" dark><router-link to="/login">Login</router-link></v-btn>
        <v-btn  tile color="indigo lighten-2" dark><router-link to="/about">About</router-link> </v-btn>

        
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