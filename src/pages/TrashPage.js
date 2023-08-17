import React from "react";
import { useNoteContext } from "../context/NoteContext";
import { VscTrash } from "react-icons/vsc";
import "./Archive.css";
const TrashPage = () => {
  const { trashedNotes, deletefromTrash } = useNoteContext();
  const deletefromtrash = (index) => {
    deletefromTrash(index);
  };
  return (
    <div>
      <h1>Trashed Notes</h1>
      <ul className="archive-container">
        {trashedNotes.length > 0 ? (
          trashedNotes.map((note, index) => (
            <li key={index} className="archive-card">
              <strong>Title: {note.title}</strong>
              <br />
              Description: {note.desc}
              <VscTrash
                className="archive-card-footer"
                onClick={() => deletefromTrash(index)}
              />
            </li>
          ))
        ) : (
          <h1>No trashed notes available</h1>
        )}
      </ul>
    </div>
  );
};

export default TrashPage;
