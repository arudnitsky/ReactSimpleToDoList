import * as React from 'react';
import { render } from 'react-dom';
import ToDoItemList from './ToDoItemList';

import './styles.css';

const toDoList = [
  { title: 'Water plants', isDone: false },
  { title: 'Mow lawn', isDone: false },
  { title: 'Weed garden', isDone: true },
  { title: 'Feed dog', isDone: true }
];

/*const todoList = [
  {
    listTitle: "Home",
    listItems: [
      { title: "Water plants", isDone: false },
      { title: "Mow lawn", isDone: false },
      { title: "Weed garden", isDone: true },
      { title: "Feed dog", isDone: true }
    ]
  }
];*/

const App = () => (
  <div className="App">
    <ToDoItemList toDoList={toDoList} />
  </div>
);

render(<App />, document.getElementById('root'));
