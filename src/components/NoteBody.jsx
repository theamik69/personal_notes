import React from "react";
import NoteInput from "./NoteInput";
import NoteListActive from "./NoteListActive";
import NoteListArsip from "./NoteListarchives";

class NoteBody extends React.Component {
  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.props.addNote} />
        <h2>Catatan Aktif</h2>
        <NoteListActive  noteFilter={this.props.noteFilter} onDelete={this.props.onDelete} onArchive={this.props.onArchive} />
        <h2>Arsip</h2>
        <NoteListArsip noteFilter={this.props.noteFilter} onDelete={this.props.onDelete} onArchive={this.props.onArchive} />
      </div>
    );
  }
}

export default NoteBody;
