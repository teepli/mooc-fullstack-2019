import React from "react";

export default function SubmitForm({newName, newNumber, handleNameAdd, handleNameChange, handleNumberChange}) {
  return (
    <div>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleNameAdd}>
            add
          </button>
        </div>
      </form>
    </div>
  );
}
