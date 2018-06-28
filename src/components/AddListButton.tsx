import * as React from 'react';

export default class AddListButton extends React.Component{
  render() {
    return (
      <div className="appheader-add-list-button">
        <button onClick={() => console.log('add note')}>+</button>
      </div>
    );
  }
}
