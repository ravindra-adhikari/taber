<template>
 
            <v-card>

            <v-card-text>
                <v-form name="register-form"
                browser-autocomplete="off" 
                >
                    <v-text-field
                        name="email"
                        label="email"
                        id="email"
                        v-model="email"
                    >
                        
                    </v-text-field>
                    <v-text-field
                        label="Password"
                        type = password
                        v-model="password"
                        autocomplete = "new-password"
                    ></v-text-field>
                    <div class="red white--text error" v-html="error" v-if="error"></div>
                    <v-btn depressed dark @click="registerUser" class="indigo darken-1">Register Now !</v-btn>
                </v-form>
            </v-card-text>
            </v-card>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
    name: 'NewUser',
    data () {
        return{
            email: '',
            password: '',
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