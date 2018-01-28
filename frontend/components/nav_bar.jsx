import React from 'react';
import Modal from 'react-modal';
import NewNoteFormContainer from './note_form/new_note_form_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            noteFormModalIsOpen: false
        };

        this.handleOpenNoteFormModal = this.handleOpenNoteFormModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenNoteFormModal() {
        this.handleCloseModal();
        this.setState({noteFormModalIsOpen: true});
    }

    handleCloseModal() {
        this.setState({ noteFormModalIsOpen: false});
    }
    
    newNoteModal() {
        return (
            <div className='nav-bar'>
                <button className='add-note-btn' onClick={this.handleOpenNoteFormModal}>+  Add Note</button>
                <Modal className="new-note-modal note-form-modal"
                       overlayClassName="new-note-overlay note-form-overlay"
                       isOpen={this.state.noteFormModalIsOpen}
                       onAfterOpen={this.afterOpenLoginModal}
                       onRequestClose={this.handleCloseModal}
                       contentLabel="new-note-modal"
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
                    <NewNoteFormContainer
                        welcomeState={this.state}
                        handleCloseModals={this.handleCloseModal}
                    />
                </Modal>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.newNoteModal()}
            </div>
        );
    }
}

export default NavBar;
