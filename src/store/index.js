import Vuex from 'vuex'
import auth from './modules/auth';
import { createLogger } from 'vuex';

const debug = process.env.NODE_ENV !== 'production'

const createStore = () => new Vuex.Store({
    modules: {
        auth: auth
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});

export default createStore;