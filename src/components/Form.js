import React, { useState } from "react";


 function Form(props){
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [task, setTask] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
      }
      function handleChangeCompany(e) {
        setCompany(e.target.value);
      }
      function handleChangeTask(e) {
        setTask(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        props.addClient(name, company, task);
        setName("");
        setCompany("");
        setTask("");
      }
    return (
        <form onSubmit={handleSubmit}>
        Client Name:
        <input
          type="text"
          id="new-client-input1"
          className="input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChangeName}
        />
        Company:
        <input
          type="text"
          id="new-client-input2"
          className="input"
          name="text"
          autoComplete="off"
          value={company}
          onChange={handleChangeCompany}
        />
        Task:
        <input
          type="text"
          id="new-client-input3"
          className="input"
          name="text"
          autoComplete="off"
          value={task}
          onChange={handleChangeTask}
        />
        <button type="submit" className="btn submit">
          Add
        </button>
      </form>
    );
}

export default Form;