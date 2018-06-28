import * as React from 'react';
import { render } from 'react-dom';
import * as uuid  from 'uuid';
import ToDoAppHeader from './components/ToDoAppHeader';
import ToDoList from './components/ToDoList';

import './styles.css';

const toDoLists = [
  {
    key: uuid.v4(),
    listTitle: "Home Tasks",
    listItems: [
      { title: "Hang pictures", isDone: false },      
      { title: "Pay bills", isDone: false },
      { title: "Feed dog", isDone: true }
    ]
  },
  {
    key: uuid.v4(),
    listTitle: "Garden Tasks",
    listItems: [
      { title: "Water plants", isDone: false },
      { title: "Mow lawn", isDone: true },
      { title: "Weed garden", isDone: true }
    ]
  }
];

const App = () => (
  <div className="app">
    <ToDoAppHeader />
    <ToDoList toDoListModels={toDoLists} />
  </div>
);

render(<App />, document.getElementById('root'));
