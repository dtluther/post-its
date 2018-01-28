import React from 'react';
// import Modal from 'react-modal';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     newNoteModalIsOpen: false
        // };

        // this.handleOpenNewNoteModal = this.handleOpenNewNoteModal.bind(this);
        // this.handleCloseModal = this.handleOpenNewNoteModal.bind(this);
    }

    // addNote(event) {
    //     return event => {
    //         event.preventDefault();

    //     }
    // }

    render() {
        return (
            <div className='nav-bar'>
                <button className='add-note-btn'>+  Add Note</button>
            </div>
        );
    }
}

export default NavBar;
