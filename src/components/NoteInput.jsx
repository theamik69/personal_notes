import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onCharacterEventHadler = this.onCharacterEventHadler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;

    if (inputTitle.length <= 50) {
      this.setState({ title: inputTitle });
    } else {
      this.setState({ title: inputTitle.slice(0, 50) });
    }
  }

  onCharacterEventHadler() {
    const character = 50 - this.state.title.length;
    return character;
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.onCharacterEventHadler()}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini..." cols="30" rows="10" value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
