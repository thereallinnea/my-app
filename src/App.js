import React, { useState } from "react";
import ClientItem from "./components/ClientItem";
import Form from "./components/Form";
import { nanoid } from "nanoid";
// Jag har följt en nedladdningstutorial från https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started



function App(props) {
  const [clients, setClients] = useState(props.clients);
  function addClient(name, company, task) {
    const newClient = { id: "index" + nanoid(), name: name, company: company, task: task };
    setClients([...clients, newClient]);
  }
  function deleteClient(id) {
    const remainingClients = clients.filter(client => id !== client.id);
    setClients(remainingClients);
  }
  function editClient(id, newName, newCompany, newTask) {
    const editedClientList = clients.map(client => {
    // if this task has the same ID as the edited task
      if (id === client.id) {
        //
        return {...client, name: newName, company: newCompany, task: newTask}
      }
      return client;
    });
    setClients(editedClientList);
  }
  const clientList = clients.map(client => (
    <ClientItem id={client.id} 
    name={client.name} 
    company={client.company} 
    task={client.task} key={client.id} 
    deleteClient={deleteClient} 
    editClient={editClient}
    />
  ));
  
  return (
    <div className = "site-block">
      <div id="site-heading">
        <h1 >Clientelle Database</h1>
      </div>
      <Form addClient={addClient} />
      <h2 id="list-heading">
        This weeks clients
      </h2>
      <ul
        className="clientlist"
      >
        {clientList}
      </ul>
    </div>
  );
}

export default App;
