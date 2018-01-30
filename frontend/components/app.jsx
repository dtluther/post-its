import React from 'react';
import NavBar from './nav_bar';
import NoteIndexContainer from './notes_index/notes_index_container'

const App = () => (
    <div>
        <header>
            <NavBar/>
        </header>

        <main id="main">
            <NoteIndexContainer/>
        </main>
    </div>
);

export default App;