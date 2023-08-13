import React, { useState } from "react";
import "./Note.css";
import { toast } from "react-hot-toast";
import { BiArchiveIn } from "react-icons/bi";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import { useNoteContext } from "../context/NoteContext";

const Note = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const { notes, setNotes, pinnedNotes } = useNoteContext();
  const { moveToArchive, moveToTrash, moveToPinned, movetounpin } =
    useNoteContext();
  const add = (e) => {
    if (title && desc) {
      const newNote = { title, desc, type };
      setNotes([...notes, newNote]);
      setTitle("");
      setDesc("");
      setType("personal");
    }
  };
  const gotoarchive = (index) => {
    moveToArchive(index);
    toast.success("note sent to archive section");
  };

  const gototrash = (index) => {
    moveToTrash(index);
  };

  const gotoPinned = (index) => {
    moveToPinned(index);
  };
  const unpinnote = (index) => {
    movetounpin(index);
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
          <select onChange={(e) => setType(e.target.value)} value={type}>
            <option>Personal</option>
            <option>Office</option>
          </select>
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
                <BsPinAngleFill size={25} onClick={() => unpinnote(index)} />
              </span>
              <div className="note-card-footer">
                <BiArchiveIn
                  className="archive"
                  onClick={() => gotoarchive(index)}
                />
                <VscTrash className="trash" onClick={() => gototrash(index)} />
              </div>
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
                <div className="note-card-type"> {note.type}</div>
                <span className="pin-icon-on-card">
                  <BsPinAngle size={25} onClick={() => gotoPinned(index)} />
                </span>
                <div className="note-card-footer">
                  <BiArchiveIn
                    className="archive"
                    onClick={() => gotoarchive(index)}
                  />
                  <VscTrash
                    className="trash"
                    onClick={() => gototrash(index)}
                  />
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
