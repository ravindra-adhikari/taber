<template>
  <v-contain>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <v-card>
            <v-toolbar flat dark class="indigo darken-1">
                <v-toolbar-title >
                Register
                </v-toolbar-title>

            </v-toolbar>
            <v-card-text>
                <v-form>
                    <v-text-field
                        name="email"
                        label="email"
                        id="email"
                        v-model="email"
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                       type = password
                        v-model="password"
                    ></v-text-field>
                    <div class="red white--text error" v-html="error" v-if="error"></div>
                    <v-btn depressed dark @click="registerUser" class="indigo darken-1">Register Now !</v-btn>
                </v-form>
            </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </v-contain>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
    name: 'NewUser',
    data () {
        return{
            email: 'me@domain.com',
            password: 'password',
            error: ''
        }
    },
    methods: {
        
        async registerUser(){
          try{
            const response = await AuthService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
          } catch (err){
              console.log(`bummer`);
              this.error = err.response.data.error
          }
        }


    },

}
</script>

<style>
.error{
    padding: 5px;
    margin-bottom: 10px;
}
</style>