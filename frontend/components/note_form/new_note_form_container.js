import { connect } from 'react-redux';
import NoteForm from './note_form';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = state => {
    return {
        formType: "new"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNote: note => dispatch(createNote(note))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteForm);