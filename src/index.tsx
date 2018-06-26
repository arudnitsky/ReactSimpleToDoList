import * as React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ToDoList from './components/ToDoList';
import ToDoAppHeader from './components/ToDoAppHeader';

import './styles.css';

const toDoLists = [
  {
    listTitle: "Home Tasks",
    listItems: [
      { title: "Hang pictures", isDone: false },      
      { title: "Pay bills", isDone: false },
      { title: "Feed dog", isDone: true }
    ]
  },
  {
    listTitle: "Garden Tasks",
    listItems: [
      { title: "Water plants", isDone: false },
      { title: "Mow lawn", isDone: true },
      { title: "Weed garden", isDone: true }
    ]
  }
];

const App = () => (
  <div className="App">
    <CssBaseline />
    <ToDoAppHeader />
    <ToDoList toDoListModels={toDoLists} />
  </div>
);

render(<App />, document.getElementById('root'));
