import React, { useState, ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}
export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event?.target.value);
  };
  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button>Add note</button>
    </div>
  );
};
