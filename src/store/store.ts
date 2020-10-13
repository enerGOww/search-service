import { createStore } from 'redux';
import rootReducer from './reducers';
import { init } from './initStoreEvents';

const store = createStore(rootReducer);

export default store;
init();
