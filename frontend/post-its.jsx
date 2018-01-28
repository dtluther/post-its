import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING START
import { createNote } from './util/note_api_util';
window.createNote = createNote;


// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});