import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import bookmarkReducer from './bookmarkReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  bookmark: bookmarkReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
