<template>

            <v-card>
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
                    <v-btn depressed dark @click="signIn" class="indigo darken-1">Login</v-btn>
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
            email: 'me@domain.com',
            password: 'password',
            error: ''
        }
    },
    methods: {
        
        async signIn(){
          try{
            const response = await AuthService.login({
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