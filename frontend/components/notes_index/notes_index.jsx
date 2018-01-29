import React from 'react';
import NoteIndexItem from './note_index_item';

class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchNotes();
    }

    handleDelete(noteId) {
        return e => {
            e.preventDefault();
            this.props.deleteNote(noteId);
        };
    }

    renderNotesIndex() {
        let notes = this.props.notes;
        if (notes.length > 0) {
            return(
                <ul className="notes-index-ul">
                    {notes.map((note, idx) => {
                        return (
                            <li className="note-index-item-li" key={`note-${idx}`}>
                                <NoteIndexItem note={note} idx={idx}/>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return null;
        }
    }

    render() {
        return(
            <div className="notes-index-div">
                {this.renderNotesIndex()}
            </div>
        );
    }
}

export default NotesIndex;