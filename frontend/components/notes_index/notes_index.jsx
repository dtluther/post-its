import React from 'react';
import NoteIndexItem from './note_index_item';

class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchNotes();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.notes.length !== this.props.notes.length) {
            this.props.fetchNotes();
        }
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
                    {notes.reverse().map((note, idx) => {
                        return (
                            <li className="note-index-item-li" key={`note-${idx}`}>
                                <NoteIndexItem note={note} idx={idx}
                                    deleteNote={this.props.deleteNote}
                                    updateNote={this.props.updateNote}/>
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