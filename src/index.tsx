import * as React from 'react';
import { render } from 'react-dom';
import * as uuid  from 'uuid';
import ToDoAppHeader from './components/ToDoAppHeader';


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
  <ToDoAppHeader toDoListModels={toDoLists} />
);

render(<App />, document.getElementById('root'));
