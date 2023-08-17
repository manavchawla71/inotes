import React, { createContext, useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
const NoteContext = createContext();
export const NoteProvider = ({ children }) => {
  const moveToArchive = (index) => {
    toast("note moved to archive");
    const archivedNote = notes[index];
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setArchivedNotes((prev) => [...prev, archivedNote]);
  };

  const moveToTrash = (index) => {
    toast("notes moved to trash");
    const trashedNote = notes[index];
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setTrashedNotes((prev) => [...prev, trashedNote]);
  };
  const returntonotes = (index) => {
    toast("note recoverd from archive");
    const returnedNote = archivedNotes[index];
    setArchivedNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setNotes((prevNotes) => [...prevNotes, returnedNote]);
  };
  const deletefromTrash = (index) => {
    toast("note permanently deleted");
    const trashedNote = trashedNotes[index];
    setTrashedNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    // setNotes((prevNotes) => [...prevNotes, trashedNote]);
  };

  const moveToPinned = (index) => {
    toast("note pinned");
    const pinnedNote = notes[index];
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setPinnedNotes((prev) => [...prev, pinnedNote]);
  };
  const movetounpin = (index) => {
    toast("note unpinned");
    const unpinnedNote = pinnedNotes[index];
    setNotes([...notes, unpinnedNote]);
    const updatedPinnedNotes = pinnedNotes.filter((_, i) => i !== index);
    setPinnedNotes(updatedPinnedNotes);
  };

  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [trashedNotes, setTrashedNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const contextValue = {
    notes,
    setNotes,
    setArchivedNotes,
    archivedNotes,
    trashedNotes,
    pinnedNotes,
    setPinnedNotes,
    moveToArchive,
    moveToPinned,
    movetounpin,
    moveToTrash,
    deletefromTrash,
    returntonotes,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};
export const useNoteContext = () => useContext(NoteContext);
