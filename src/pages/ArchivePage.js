import React from "react";
import { useNoteContext } from "../context/NoteContext";
import { toast } from "react-hot-toast";
import { BiArchiveOut } from "react-icons/bi";
import "./Archive.css";
const ArchivePage = () => {
  const { returntonotes, archivedNotes } = useNoteContext();
  const returntoNotes = (index) => {
    returntonotes(index);
  };
  return (
    <div>
      <h1>Archived Notes</h1>
      <ul className="archive-container">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note, index) => (
            <li key={index} className="archive-card">
              <strong>Title: {note.title}</strong>
              <br />
              Description: {note.desc}
              <div className="archive-card-footer">
                <BiArchiveOut onClick={() => returntoNotes(index)} />
              </div>
            </li>
          ))
        ) : (
          <h1>No archives available</h1>
        )}
      </ul>
    </div>
  );
};
export default ArchivePage;
