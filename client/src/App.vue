<template>
  <div id="app">
    <v-app>
      <page-header/>   
      <v-container fluid>
        <v-content sm6 offset-sm-3>        
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
*{
  text-transform: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
#nav {
  padding: 30px;
  text-transform: capitalize;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #3a2488;
    &.router-link-exact-active {
    color:#fff;
    }
  }
}
</style>
