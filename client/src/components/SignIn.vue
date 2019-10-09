<template>

            <v-card>
            <v-card-text>
                <v-form name="login-form"> 
                    <v-text-field
                        name="email"
                        label="email"
                        v-model="email"
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        label="Password"
                       type = password
                        v-model="password"
                    ></v-text-field>
                    <div class="red white--text error" v-html="error" v-if="error"></div>
                    <v-btn depressed dark @click="login" class="indigo darken-1">Login</v-btn>
                </v-form>
            </v-card-text>
            </v-card>

</template>

<script>
import AuthService from '@/services/AuthService'
export default {
    name: 'SignIn',
    data () {
        return{
            email: 'me@domain.com',
            password: 'password',
            error: null
        }
    },
    methods: {
        
        async login(){
          try{
            const response = await AuthService.login({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
          } catch (error){
              console.log(`bummer`);
              this.error = error.response.error
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