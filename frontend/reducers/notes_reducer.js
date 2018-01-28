import merge from 'lodash/merge';
import {
    RECEIVE_NOTES,
    RECEIVE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE
} from '../actions/note_actions';

const notesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);

    switch(action.type) {
        case RECEIVE_NOTES:
            return action.notes;
        case RECEIVE_NOTE:
            return merge({}, oldState, action.note);
        case UPDATE_NOTE:
            const idToUpdate = action.id;
            newState[idToUpdate] = action.note[idToUpdate];
            return newState;
        case DELETE_NOTE:
            const idToDelete = action.note.id;
            delete newState[idToDelete];
            return newState;

        default:
            return oldState;
    }
};

export default notesReducer;