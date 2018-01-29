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

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });

    };
  }

  handleSubmit() {
      return e => {
          e.preventDefault();
          if (this.props.formType === "new") {
              this.props.createNote({note: this.state});
          } else {
              this.props.updateNote({note: this.state});
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
    console.log(this.props.formType);
    console.log(this.props);
    console.log(this.state);
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