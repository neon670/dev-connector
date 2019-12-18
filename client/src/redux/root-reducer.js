import {combineReducers} from 'redux';
import alert from './reducers/alert-reducer';
import auth from './reducers/auth-reducer';
import profile from './reducers/profile-reducer';
import post from './reducers/post-reducer';

export default combineReducers({
	alert,
	auth,
	profile,
	post
});