import React, { useState, useEffect } from "react";
import CategoryList from "./components/CategoryList";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./styles.css";

const App = () => {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "Category 1", notes: [] },
          { id: 2, name: "Category 2", notes: [] },
        ];
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const addCategory = () => {
    const newCategory = {
      id: Date.now().toString(),
      name: `New Category`,
      notes: [],
    };
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const addNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: "",
      content: "",
      color: "#ffffff",
    };

    const updatedCategories = categories.map((cat) =>
      cat.id === selectedCategoryId
        ? { ...cat, notes: [newNote, ...cat.notes] }
        : cat
    );

    setCategories(updatedCategories);
    setSelectedNoteId(newNote.id);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    localStorage.setItem("selectedNoteId", newNote.id);
  };

  const updateNote = (noteId, updatedData) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategoryId
          ? {
              ...cat,
              notes: cat.notes.map((n) =>
                n.id === noteId ? { ...n, ...updatedData } : n
              ),
            }
          : cat
      )
    );
  };

  const deleteNote = (noteId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategoryId
          ? {
              ...cat,
              notes: cat.notes.filter((n) => n.id !== noteId),
            }
          : cat
      )
    );
    setSelectedNoteId(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const currentCategory = categories.find((c) => c.id === selectedCategoryId);
  const currentNote =
    currentCategory?.notes.find((n) => n.id === selectedNoteId) || null;

  const filteredNotes = currentCategory?.notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="sidebar">
        <button className="add-category-btn" onClick={addCategory}>
          + Add Category
        </button>
        <CategoryList
          categories={categories}
          setSelectedCategoryId={setSelectedCategoryId}
          selectedCategoryId={selectedCategoryId}
        />
      </div>

      <div className="note-list">
        <button className="add-note-btn" onClick={addNote}>
          + Add Note
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <br></br>
        <br></br>

        <NoteList
          notes={filteredNotes || []}
          selectedNoteId={selectedNoteId}
          setSelectedNoteId={setSelectedNoteId}
        />
      </div>

      <div className="editor-area">
        {currentNote ? (
          <NoteEditor
            note={currentNote}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ) : (
          <div className="placeholder">Select a note or create a new one.</div>
        )}
      </div>
    </div>
  );
};

export default App;
