import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const receiveNotes = notes => {
    return {
        type: RECEIVE_NOTES,
        notes
    };
};

export const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
});

export const modifyNote = note => ({
    type: UPDATE_NOTE,
    note
});

export const removeNote = note => ({
    type: DELETE_NOTE,
    note
});

// thunk action creators
export const fetchNotes = () => dispatch => {
    return NoteAPIUtil.fetchNotes()
        .then(notes => dispatch(receiveNotes(notes)));
};

export const fetchNote = id => dispatch => {
    return NoteAPIUtil.fetchNote(id)
        .then(note => dispatch(receiveNote(note)));
};

export const createNote = note => dispatch => {
    return NoteAPIUtil.createNote(note)
        .then(note => dispatch(receiveNote(note)));
};

export const updateNote = note => dispatch => {
    return NoteAPIUtil.updateNote(note)
        .then(note => dispatch(receiveNote(note)));
};

export const deleteNote = note => dispatch => {
    return NoteAPIUtil.deleteNote(note)
        .then(note => dispatch(removeNote(note)));
};