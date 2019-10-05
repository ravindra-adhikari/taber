import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme:{
        themes:{
            light:{
                primary:'#3939ab',
                anchor : '#3939ab',
                toolbarTitle : '#fff',
            }
        }
    }
}

export default new Vuetify(opts)