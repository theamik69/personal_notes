import React from "react";
import NoteItem from "./NoteItem";

class NoteListActive extends React.Component {
  constructor(props) {
    super(props);

    this.noteActiveHandler = this.noteActiveHandler.bind(this);
  }
  noteActiveHandler() {
    const active = this.props.noteFilter.filter((note) => note.archived === false);
    return active;
  }
  render() {
    return (
      <div className="notes-list">
        {this.noteActiveHandler().length ? (
          this.noteActiveHandler().map((note) => <NoteItem key={note.id} id={note.id} noteFilter={this.props.noteFilter} onDelete={this.props.onDelete} onArchive={this.props.onArchive} {...note} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteListActive;
