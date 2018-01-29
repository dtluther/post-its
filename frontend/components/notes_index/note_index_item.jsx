import React from 'react';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render() {
        let color = this.props.note.color;
        return (
            <div className="note-index-item">
                <div className={`note-color ${color}`} />
                <div className="note-header">
                    <h1>{this.props.note.title}</h1>
                    <div className="note-item-btns">
                        <i class="fa fa-pencil" aria-hidden="true" />
                        <i class="fa fa-trash" aria-hidden="true" />
                    </div>
                </div>
                <p className="note-body">{this.props.note.body}</p>
            </div>
        );
    }
}

export default NoteIndexItem;