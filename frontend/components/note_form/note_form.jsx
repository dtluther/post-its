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

  render() {
    const submit =
      this.props.formType === "new" ? this.handleSubmit : this.handleSave;
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
                onChange={this.update("title")}
                placeholder="Untitled"
            />
            <textarea
                className="body"
                onChange={this.update("body")}
                placeholder="Just start typing here"
                style={{border: 0, outline: 0}}
                rows="25"
            />
        </div>
        <div className='note-btns'>
            <button className='cancel note-btn'>Cancel</button>
            <button className='submit note-btn'>Submit</button>
        </div>
      </div>
    );
  }


}

export default NoteForm;