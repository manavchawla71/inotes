import React, { createContext, useContext } from "react";
import { useState } from "react";
const NoteContext = createContext();
export const NoteProvider = ({ children }) => {
  const moveToArchive = (index) => {
    const archivedNote = notes[index];
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setArchivedNotes((prev) => [...prev, archivedNote]);
  };

  const moveToTrash = (index) => {
    const trashedNote = notes[index];
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setTrashedNotes((prev) => [...prev, trashedNote]);
  };
  const returntonotes = (index) => {
    const returnedNote = archivedNotes[index];
    setArchivedNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setNotes((prevNotes) => [...prevNotes, returnedNote]);
  };
  // const deletefromtrash = (index) => {
  //   const newNotes = [...notes];
  //   newNotes.splice(index, 1);
  //   setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
  // };

  const moveToPinned = (index) => {
    const pinnedNote = notes[index];
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
    setPinnedNotes((prev) => [...prev, pinnedNote]);
  };
  const movetounpin = (index) => {
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
    // deletefromtrash,
    returntonotes,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};
export const useNoteContext = () => useContext(NoteContext);
