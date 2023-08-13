import React from "react";
import { useNoteContext } from "../context/NoteContext";
import { BiArchiveOut } from "react-icons/bi";

const ArchivePage = () => {
  const { returntonotes, archivedNotes } = useNoteContext();
  const returntoNotes = (index) => {
    returntonotes(index);
  };
  return (
    <div>
      <h1>Archived Notes</h1>
      <ul>
        {archivedNotes.map((note, index) => (
          <li key={index}>
            <strong>Title: {note.title}</strong>
            <br />
            Description: {note.desc}
            <BiArchiveOut onClick={() => returntoNotes(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivePage;
