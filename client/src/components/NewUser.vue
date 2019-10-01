<template>
  <v-container grid-list-xs>
    <v-layout>
        <v-flex>
            <v-card>
            <v-toolbar flat>
                <v-toolbar-title>
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
                        :type= "password"
                        v-model="password"
                    ></v-text-field>
                    <v-btn rounded color="primary" dark>Register Now !</v-btn>
                </v-form>
            </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'NewUser',
    data () {
        return{
            email: 'me@domain.com',
            password: 'password'
        }
    }

}
</script>

<style>

</style>