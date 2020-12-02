import React,  { useState } from "react";

export default function ClientItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newCompany, setNewCompany] = useState('');
    const [newTask, setNewTask] = useState('');
    function handleChangeName(e) {
        setNewName(e.target.value);
      }
      function handleChangeCompany(e) {
        setNewCompany(e.target.value);
      }
      function handleChangeTask(e) {
        setNewTask(e.target.value);
      }
      function handleSubmit(e) {
        e.preventDefault();
        props.editClient(props.id, newName, newCompany, newTask);
        setNewName("");
        setNewCompany("");
        setNewTask("");
        setEditing(false);
      }
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="client-label" htmlFor={props.id}>
            </label>
            New client Name:
        <input
          type="text"
          id="new-client-input1"
          className="input"
          name="text"
          autoComplete="off"
          value={newName}
          onChange={handleChangeName}
        />
        New company name:
        <input
          type="text"
          id="new-client-input2"
          className="input"
          name="text"
          autoComplete="off"
          value={newCompany}
          onChange={handleChangeCompany}
        />
        New task:
        <input
          type="text"
          id="new-client-input3"
          className="input"
          name="text"
          autoComplete="off"
          value={newTask}
          onChange={handleChangeTask}
        />
          </div>
          <div className="btn-group">
            <button type="button" className="edit-cancel" onClick={() => setEditing(false)}>
              Cancel
              <span className="visually-hidden"></span>
            </button>
            <button type="submit" className="edit-save">
              Save
              <span className="visually-hidden"></span>
            </button>
          </div>
        </form>
      );
      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
          <label className="client-label" htmlFor={props.id}>
            <h3>{props.name}</h3>
            <p>Works at: {props.company}</p>
            <p>Task: {props.task}</p>
          </label>
        </div>
        <div className="btn-group">
        <button type="button" className="btn edit" onClick={() => setEditing(true)}>
            Edit <span className="visually-hidden"></span>
        </button>
          <button type="button" className="btn delete" onClick={() => props.deleteClient(props.id)}>
            Delete <span className="visually-hidden"></span>
          </button>
            </div>
        </div>
      );
      return <li className="client">{isEditing ? editingTemplate : viewTemplate}</li>;
  }