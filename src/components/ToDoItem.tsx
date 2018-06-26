import * as React from 'react';

export default class ToDoItem extends React.Component<ToDoItemProps> {
  render() {
    const { title, isDone } = this.props;
    return (
      <div>
        <div className="todo-item-row">
          <input
            className="todo-item-checkbox"
            type="checkbox"
            checked={isDone}
          />
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export interface ToDoItemProps {
  title: string;
  isDone: boolean;
}
