import  {combineReducers} from 'redux-immutable';
import { reducer as userReducer} from './user/index';
import { reducer as taskReducer} from './task/index';

export default combineReducers({
    user: userReducer,
    task: taskReducer
})

