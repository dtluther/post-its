import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING START
// Actions
import { fetchNotes, fetchNote, createNote, deleteNote } from './actions/note_actions';
window.notes = fetchNotes;
window.note = fetchNote;
window.create = createNote;
window.deleteNote = deleteNote;


// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END
});