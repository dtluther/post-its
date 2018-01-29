import React from 'react';

class NoteIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete(id) {
        return e => {
            e.preventDefault();
            this.props.deleteNote(id);
        };
    }
    render() {
        console.log(this.props);
        let color = this.props.note.color;
        let id = this.props.note.id;
        return (
            <div className="note-index-item">
                <div className={`note-color ${color}`} />
                <div className="note-header">
                    <p>{this.props.note.title}</p>
                    <div className="note-item-btns">
                        <i class="fa fa-pencil" aria-hidden="true" />
                        <i class="fa fa-trash" aria-hidden="true"
                            onClick={this.handleDelete(id)} />
                    </div>
                </div>
                <p className="note-body">{this.props.note.body}</p>
            </div>
        );
    }
}

export default NoteIndexItem;