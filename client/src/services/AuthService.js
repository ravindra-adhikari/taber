import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    signin (credentials) {
        return Api().post('login', credentials)
    }
}