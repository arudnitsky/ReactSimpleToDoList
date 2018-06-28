import * as React from 'react';
import ToDoItemList from './ToDoItemList';
import ToDoListModel from '../models/ToDoListModel';

export default class ToDoList extends React.Component<ToDoListProps> {
  render() {
    const { toDoListModels } = this.props;

    return (
      toDoListModels.map(list => (
        <div className='todo-list'>
          <div className='todo-list-title'>
            {list.listTitle}
          </div>
          <ToDoItemList toDoList={list.listItems} />
        </div>
      ))

    )
  }
}

export interface ToDoListProps {
  toDoListModels: ToDoListModel[];
}
