<template>
  <div id="app">
    <v-app>
      <page-header/>   
      <v-container fluid>
        <v-content>        
      <router-view />     
      </v-content> 
      </v-container> 
      
    </v-app>
  
  </div>
</template>

<script>
import PageHeader from './components/Header'

export default {
  name : 'app',
  components:{
    PageHeader
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
