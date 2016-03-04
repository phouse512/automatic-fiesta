import React from 'react';
import {render} from 'react-dom';

class AppBox extends React.Component {
  render () {
    return (
      <div className="appBox">
        <h1>Hello, world! I am an AppBox.</h1>
      </div>
    );
  }
}

render(
  <AppBox />,
  document.getElementById('content')
);

