import React from "react";
import { getInitialData } from "../utils";
import Header from "./Header";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onSearchNoteTitleHandler = this.onSearchNoteTitleHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onNoteDisplayHandler = this.onNoteDisplayHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    this.setState({ notes: updatedNotes });
  }

  onSearchNoteTitleHandler(title) {
    this.setState({ search: title });
  }

  onNoteDisplayHandler() {
    if (this.state.search === "") {
      return this.state.notes;
    } else {
      const noteFilter = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
      return noteFilter;
    }
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <Header addKeyword={this.onSearchNoteTitleHandler} />
        <NoteBody noteFilter={this.onNoteDisplayHandler()} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default NoteApp;
