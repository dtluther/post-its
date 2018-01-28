import React from 'react';
import ReactDOM from 'react-dom';

// TESTING START
import { createNote } from './util/note_api_util';

window.createNote = createNote;
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Post-Its!</h1>, root);
});