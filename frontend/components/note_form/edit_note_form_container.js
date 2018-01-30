import { connect } from 'react-redux';
import NoteForm from './note_form';
import { updateNote } from '../../actions/note_actions';

const mapStateToProps = state => {
    return {
        formType: "edit"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateNote: note => dispatch(updateNote(note))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteForm);