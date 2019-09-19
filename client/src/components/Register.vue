<template>
<div>
    <h1>Register</h1>
    <input type="email" name="email" id=" " placeholder="email@host.com" v-model="email"> <br>
    <input type="password" name="password" id="" placeholder="password" v-model="password"> <br>
    <button @click="registerUser">Register</button>
</div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser () {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style>
h1{
    font-size: 21px;
    color:darkolivegreen;
    }
</style>
