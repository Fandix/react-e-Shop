import { combineReducers } from "redux";
import userSlice from '../slices/auth';

const reducers = combineReducers({
    userSlice,
});

export default reducers;