import * as React from 'react';
import ToDoList from './ToDoList';
import ToDoListModel from '../models/ToDoListModel';

export default class AppHeader extends React.Component<AppHeaderProps> {
  render() {
    const { toDoListModels } = this.props;
    return (
      <div className="appheader">
        <h1>Simple React ToDoList</h1>
        <ToDoList toDoListModels={toDoListModels} />
      </div>
    );
  }
}

export interface AppHeaderProps {
  toDoListModels: ToDoListModel[];
}
