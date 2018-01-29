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
        id: this.props.note.id,
        color: this.props.note.color,
        title: this.props.note.title,
        body: this.props.note.body
      };
    }
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });

    };
  }

  handleSubmit() {
      return e => {
          e.preventDefault();
          console.log(this.props);
          if (this.props.formType === "new") {
              this.props.createNote({note: this.state});
              console.log('new');
          } else {
              console.log('edit')
              this.props.updateNote(this.state);
          }

          this.props.handleCloseModal();

      };
  }


  handleCloseModal() {
      return e => {
          e.preventDefault();
          this.props.handleCloseModal();
      };
  }

  render() {
    let submitText = this.props.formType === "new" ? "Add" : "Save";
    return (
      <div className="note-form">
        <div className="note-color red">
        </div>
        <div className="note-info">
            <div className="colors">
                <div className="color red" />
                <div className="color green" />
                <div className="color yellow" />
                <div className="color blue" />
            </div>
            <input
                type="text"
                className="title"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Untitled"
            />
            <textarea
                className="body"
                value={this.state.body}
                onChange={this.update("body")}
                placeholder="Just start typing here"
                style={{border: 0, outline: 0}}
                rows="25"
            />
        </div>
        <div className='note-btns'>
            <button className='cancel note-btn'
                    onClick={this.handleCloseModal()}>Cancel</button>
            <button className='submit note-btn'
                    onClick={this.handleSubmit()}>{submitText}</button>
        </div>
      </div>
    );
  }


}

export default NoteForm;