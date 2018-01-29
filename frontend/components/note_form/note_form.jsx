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

    // this.initialState = this.state;
  }

  componentDidMount() {
      const colors = document.querySelectorAll('.colors > .color');
    //   const colors = document.querySelectorAll(".colors > .color");
      window.colors = colors;
      colors.forEach( colorEl => {
          if (colorEl.className.includes(`${this.state.color}`)) {
            colorEl.classList.add('active');
          }
      });

      this.initialState = this.state;
    }
    
    highlightSubmit(initialState) {
        const submitBtn = document.querySelector('.submit.note-btn');
        if (JSON.stringify(this.state) !== JSON.stringify(initialState)) {
            submitBtn.className = 'submit note-btn active';
        } else {
            submitBtn.className = 'submit note-btn';
        }
    }
    
    update(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value }, () => {
                this.highlightSubmit(this.initialState);
            });
            
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
  
  selectColor() {
        return e => {
            e.preventDefault();

            // grab all color square elements and remove active border
            const colors = document.querySelectorAll('.colors > .color');
            colors.forEach( el => { el.classList.remove('active'); } );

            // add border to selected one
            const el = e.target;
            el.classList.add('active');

            // change note form color
            // first grab color from element className
            const color = el.className.split(' ')[1];
            const noteColor = document.querySelector('.note-form > .note-color');
            noteColor.className = `note-color ${color}`;
            
            // set state to the new color
            this.setState({ color: color}, () => {
                this.highlightSubmit(this.initialState);
            });

      };
  }


  render() {
    let submitText = this.props.formType === "new" ? "Add" : "Save";
    return <div className="note-form">
        <div className={`note-color ${this.state.color}`} />
        <div className="note-info">
          <div className="colors">
            <div className="color red" onClick={this.selectColor()} />
            <div className="color green" onClick={this.selectColor()} />
            <div className="color yellow" onClick={this.selectColor()} />
            <div className="color blue" onClick={this.selectColor()} />
          </div>
          <input type="text" className="title" value={this.state.title} onChange={this.update("title")} placeholder="Untitled" />
          <textarea className="body" value={this.state.body} onChange={this.update("body")} placeholder="Just start typing here" style={{ border: 0, outline: 0 }} rows="25" />
        </div>
        <div className="note-btns">
          <button className="cancel note-btn" onClick={this.handleCloseModal()}>
            Cancel
          </button>
          <button className="submit note-btn" onClick={this.handleSubmit()}>
            {submitText}
          </button>
        </div>
      </div>;
  }


}

export default NoteForm;