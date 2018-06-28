import * as React from 'react';
import AddListButton from './AddListButton';

export default class ToDoAppHeader extends React.Component {
  render() {
    return (
      <div className="appheader">
        <div>
          <h1>Simple React ToDoList</h1>
        </div>
        <div>
          <AddListButton />
        </div>
      </div>
    );
  }
}
