<template>
<v-content>
  <v-flex sm6 offset-xs3>
    
      <v-tabs
        v-model="login"
        background-color="primary"
        grow
      >
      <v-tabs-slider color="indigo lighten-4"></v-tabs-slider>
        <v-tab>
          Reister
        </v-tab>
        <v-tab>
          Login
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="login">
        <v-tab-item>
            <NewUser />
        </v-tab-item>
        <v-tab-item>
            <SignIn />
        </v-tab-item>
      </v-tabs-items>
  </v-flex>
</v-content>
</template>

<script>
import NewUser from '@/components/NewUser.vue'
import SignIn from '@/components/SignIn.vue'

export default {
name:'login',
components: {
    NewUser,
    SignIn
     
    },
    data(){
      return{
        login:null,
        }
    }
}
</script>

<style>

</style>