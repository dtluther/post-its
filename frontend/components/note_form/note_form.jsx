import React from 'react';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.formType === "new") {
            this.state = {
                color: "red",
                title: "",
                body: ""

            };

        } else if (this.props.formType === "edit") {
            this.state = {
                id: this.props.id,
                color: this.props.color,
                title: this.props.title,
                body: this.props.body
            };
        }
    }

    render() {
        const submit = this.props.formType === "new" ? this.handleSubmit : this.handleSave;
        return (
            <div className='note-form'>
                <div className='colors'>
                    <div className='color red'></div>
                    <div className='color green'></div>
                    <div className='color yellow'></div>
                    <div className='color blue'></div>
                </div>
                <input type="text"
                       className='title'
                       onChange={this.update('title')}
                       placeholder="Enter title here..."
                />
                <input type="text"
                       className='body'
                       onChange={this.update('body')}
                       placeholder="My note..."
                />
            </div>
        );
    }
}

export default NoteForm;