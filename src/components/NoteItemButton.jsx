import React from "react";

class NoteItemButton extends React.Component {
  constructor(props) {
    super(props);

    this.archiveButton = this.archiveButton.bind(this);
  }
  archiveButton() {
    const note = this.props.noteFilter.find((note) => note.id === this.props.id);
    if (note.archived === true) {
      return "Pindahkan";
    } else {
      return "Arsipkan";
    }
  }
  render() {
    return (
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => this.props.onDelete(this.props.id)}>
          Hapus
        </button>
        <button className="note-item__archive-button" onClick={() => this.props.onArchive(this.props.id)}>
          {this.archiveButton()}
        </button>
      </div>
    );
  }
}

export default NoteItemButton;
