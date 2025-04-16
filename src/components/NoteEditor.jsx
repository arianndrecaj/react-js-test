import React from "react";

const colors = ["#3498db", "#2ecc71", "#f1c40f"];

const NoteEditor = ({ note, updateNote, deleteNote }) => {
  const handleSave = () => {
    alert("Changes saved!");
  };

  return (
    <div
      className="editor"
      style={{ borderTop: `5px solid ${note.color || "#ccc"}` }}
    >
      <input
        type="text"
        value={note.title}
        onChange={(e) => updateNote(note.id, { title: e.target.value })}
        placeholder="Add a title"
        className="note-title"
      />
      <textarea
        value={note.content}
        onChange={(e) => updateNote(note.id, { content: e.target.value })}
        placeholder="Write your note here..."
      />

      <div className="color-tags">
        {colors.map((c) => (
          <span
            key={c}
            className={`tag ${note.color === c ? "active" : ""}`}
            style={{ backgroundColor: c }}
            onClick={() => updateNote(note.id, { color: c })}
            title={c}
          />
        ))}
      </div>

      <div className="actions">
        <button className="delete" onClick={() => deleteNote(note.id)}>
          Delete Note
        </button>
        <button className="save" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
