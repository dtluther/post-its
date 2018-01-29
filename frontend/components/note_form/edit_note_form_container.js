import { connect } from 'react-redux';
import NoteForm from './note_form';
import { withRouter } from 'react-router';
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteForm));