import { combineReducers } from 'redux-immutable';

// 每个页面的reducer
import { reducer as recommendReducer } from '@/views/discover/c-pages/recommend/store'

const AllReducers = combineReducers({
  recommend: recommendReducer
});

export default AllReducers;
