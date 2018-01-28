import { combineReducers } from 'redux';
import notesReducer from './notes_reducer';

// techinically not necessary for this project, but good practice
const rootReducer = combineReducers({
    notes: notesReducer
});

export default rootReducer;