import { combineReducers }  from 'redux';
import articles from './articles_reducers';
import gallery from './galleries_reducers'

const rootReducer = combineReducers({
    articles,
    gallery

})

export default rootReducer;