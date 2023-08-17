import React, { useState } from "react";
import "./Note.css";
import { toast } from "react-hot-toast";
import { BiArchiveIn } from "react-icons/bi";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { VscTrash, VscColorMode } from "react-icons/vsc";
import { useNoteContext } from "../context/NoteContext";

const Note = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const {
    notes,
    setNotes,
    pinnedNotes,
    moveToArchive,
    moveToTrash,
    moveToPinned,
    movetounpin,
  } = useNoteContext();

  const add = (e) => {
    if (title && desc) {
      const newNote = { title, desc, type };
      setNotes([...notes, newNote]);
      setTitle("");
      setDesc("");
      setType("personal");
    }
  };

  return (
    <div className="note-taking-page">
      <div className="app">
        <div className="add-note-title">Add Note</div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Add title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            type="text"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Add description"
            className="desc"
          />
          <button type="button" onClick={add} className="add-button">
            Add
          </button>
        </form>
      </div>

      <div className="notes-layout">
        <div>
          {pinnedNotes.map((note, index) => (
            <div key={index} className="pinned-note-card">
              <span className="note-card-title-text">{note.title}</span>
              <br />
              description: {note.desc}
              <span className="pin-icon-on-card">
                <BsPinAngleFill size={25} onClick={() => movetounpin(index)} />
              </span>
            </div>
          ))}
        </div>

        <div className="notes-list">
          <ul className="notes-container">
            {notes.map((note, index) => (
              <li key={index} className="note-card">
                <span className="note-card-title-text">{note.title}</span>
                <br />
                {note.desc}
                <span className="pin-icon-on-card">
                  <BsPinAngle size={25} onClick={() => moveToPinned(index)} />
                </span>
                <div className="note-card-footer">
                  <BiArchiveIn
                    className="archive"
                    onClick={() => moveToArchive(index)}
                  />
                  <VscTrash
                    className="trash"
                    onClick={() => moveToTrash(index)}
                  />
                  {/* <VscColorMode className="trash" /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Note;
