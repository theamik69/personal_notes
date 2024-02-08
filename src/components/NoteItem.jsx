import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemButton from "./NoteItemButton";

class NoteItem extends React.Component {
  render() {
    return (
      <div className="note-item">
        <NoteItemContent title={this.props.title} body={this.props.body} createdAt={this.props.createdAt} />
        <NoteItemButton id={this.props.id} noteFilter={this.props.noteFilter} onDelete={this.props.onDelete} onArchive={this.props.onArchive} />
      </div>
    );
  }
}

export default NoteItem;
