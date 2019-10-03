import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme:{
        themes:{
            light:{
                primary:'#3939ab',
                anchor : '#fff',
                toolbarTitle : '#fff',
            }
        }
    }
}

export default new Vuetify(opts)