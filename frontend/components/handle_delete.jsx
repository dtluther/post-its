import React from 'react';

class HandleDeleteBox extends React.Component {
    constructor(props) {
        super(props);


    }

    handleDelete(id) {
        return e => {
            e.preventDefault;

            this.props.deleteNote(id);
        }
    }
    render() {
        const id = this.props.id;
        return(
            <div className='handle-delete'>
                <h1>Delete Note</h1>
                <p>Are you sure you want to delete this note?</p>
                <div className='delete-btns'>
                    <button className='cancel delete-btn'>Cancel</button>
                    <button className='delete delete-btn' onClick={this.handleDelete(id)}>Delete</button>
                </div>
            </div>

        )
    }
};

export default HandleDeleteBox;