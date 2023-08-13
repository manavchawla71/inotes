import React from "react";
import { useNoteContext } from "../context/NoteContext";
import { VscTrash } from "react-icons/vsc";

const TrashPage = () => {
  const { trashedNotes, deletefromTrash } = useNoteContext();
  const deletefromtrash = (index) => {
    deletefromTrash(index);
  };
  return (
    <div>
      <h1> Trashed Notes</h1>
      <ul>
        {trashedNotes.map((note, index) => (
          <li key={index}>
            <strong>Title: {note.title}</strong>
            <br />
            Description: {note.desc}
            <VscTrash />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrashPage;
