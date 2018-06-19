import store from '@/store'

import state from './state.js'
import getters from './getters.js'
import setters from './setters.js'
import actions from './actions.js'
import mutations from './mutations.js'

const general = { state, actions, mutations, getters, setters }

store.registerModule('general', general)

export default store.state.general
