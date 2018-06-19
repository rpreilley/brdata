import store from '@/store'

import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

const user = { state, actions, mutations, getters }

store.registerModule('user', user)

export default store.state.user
