import * as React from 'react';
import ToDoItem from './ToDoItem';
import ToDoListItemsModel from './ToDoListItemsModel';

export default class ToDoItemList extends React.Component<ToDoListItemsProps> {
  render() {
    const { toDoList } = this.props;

    return (
      <div>
        title goes here<div className="todo-list-title" />
        <div className="todo-item-list-header">
          <div className="todo-item-list-header-done">Done</div>
          <div className="todo-item-list-header-title">Title</div>
        </div>
        {toDoList.map(item => (
          <ToDoItem title={item.title} isDone={item.isDone} />
        ))}
      </div>
    );
  }
}

export interface ToDoListItemsProps {
  toDoList: ToDoListItemsModel[];
}
