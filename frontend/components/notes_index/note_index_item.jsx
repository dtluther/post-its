import React from 'react';
import Modal from 'react-modal';
import EditNoteFormContainer from '../note_form/edit_note_form_container';
import HandleDeleteBox from '../handle_delete';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            noteFormModalIsOpen: false,
            handleDeleteModalIsOpen: false
        };

        this.handleOpenNoteFormModal = this.handleOpenNoteFormModal.bind(this);
        this.handleDeleteModal = this.handleDeleteModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    handleOpenNoteFormModal() {
        this.handleCloseModal();
        this.setState({noteFormModalIsOpen: true});
    }

    handleDeleteModal() {
        this.handleCloseModal();
        this.setState({ handleDeleteModalIsOpen: true});
    }

    handleCloseModal() {
        this.setState({ noteFormModalIsOpen: false});
        this.setState({ handleDeleteModalIsOpen: false});
    }

    render() {
        let color = this.props.note.color;
        let id = this.props.note.id;
        return (
            <div className="note-index-item">
                <div className={`note-color ${color}`} />
                <div className="note-header">
                    <p>{this.props.note.title}</p>
                    <div className="note-item-btns">
                        <i className="fa fa-pencil" aria-hidden="true"
                            onClick={this.handleOpenNoteFormModal} />
                            <Modal className="edit-note-modal note-form-modal"
                                overlayClassName="edit-note-overlay note-form-overlay"
                                isOpen={this.state.noteFormModalIsOpen}
                                onAfterOpen={this.afterOpenLoginModal}
                                onRequestClose={this.handleCloseModal}
                                contentLabel="edit-note-modal"
                                style={{
                                    overlay: {
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(165, 165, 165, 0.3)'
                                    },
                                    content: {
                                        outline: 'none',
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: '57%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        borderRadius: '5px'
                                    }
                                }}
                            >
                                <EditNoteFormContainer
                                    note={this.props.note}
                                    welcomeState={this.state}
                                    handleCloseModal={this.handleCloseModal}
                                />
                            </Modal>
                        <i className="fa fa-trash" aria-hidden="true"
                            onClick={this.handleDeleteModal} />
                            <Modal className="handle-delete-modal"
                                overlayClassName="handle-delete-overlay"
                                isOpen={this.state.handleDeleteModalIsOpen}
                                onRequestClose={this.handleCloseModal}
                                contentLabel="edit-note-modal"
                                style={{
                                    overlay: {
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(165, 165, 165, 0.3)'
                                    },
                                    content: {
                                        outline: 'none',
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        borderRadius: '5px'
                                    }
                                }}
                            >
                                <HandleDeleteBox
                                    id={this.props.note.id}
                                    deleteNote={this.props.deleteNote}
                                    welcomeState={this.state}
                                    handleCloseModal={this.handleCloseModal}
                                />
                            </Modal>
                    </div>
                </div>
                <p className="note-body">{this.props.note.body}</p>
            </div>
        );
    }
}

export default NoteIndexItem;