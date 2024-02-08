import React from "react";
import NoteItem from "./NoteItem";

class NoteListArchives extends React.Component {
  constructor(props) {
    super(props);

    this.noteArchiveHandler = this.noteArchiveHandler.bind(this);
  }
  noteArchiveHandler() {
    const archive = this.props.noteFilter.filter((note) => note.archived === true);
    return archive;
  }
  render() {
    return (
      <div className="notes-list">
        {this.noteArchiveHandler().length ? (
          this.noteArchiveHandler().map((note) => <NoteItem key={note.id} id={note.id} noteFilter={this.props.noteFilter} onDelete={this.props.onDelete} onArchive={this.props.onArchive} {...note} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteListArchives;
