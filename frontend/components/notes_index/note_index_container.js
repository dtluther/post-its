import { connect } from 'react=redux';
import NoteIndex from './note_index';
import { fetchNotes, updateNote, deleteNote } from '../../actions/note_actions';

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: id => dispatch(deleteNote(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteIndex);