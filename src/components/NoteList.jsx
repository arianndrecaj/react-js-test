import React from "react";

const NoteList = ({ notes, selectedNoteId, setSelectedNoteId }) => {
  return (
    <div className="note-preview-list">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`note-preview ${
            note.id === selectedNoteId ? "selected" : ""
          }`}
          onClick={() => setSelectedNoteId(note.id)}
          style={{ borderLeft: `5px solid ${note.color || "#ccc"}` }}
        >
          <strong>{note.title || "Untitled"}</strong>
          <p>{note.content.slice(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
