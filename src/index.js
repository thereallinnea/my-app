import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "index1", name: "Magdalena Dal", company:"Högt och Lågt", task:"Planera Rockclimbing" },
  { id: "index2", name: "Johan Från Lister", company:"Fiskebyarna", task:"Beställ nya fiskelinor" },
  { id: "index3", name: "Galna Henry", company:"Frilansare", task:"Leverera TNT" }
];
ReactDOM.render( <App clients={DATA} />,document.getElementById('root'));
