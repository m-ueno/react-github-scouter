import React from 'react';
import Note from './Note.jsx';
import Scouter from './Scouter.jsx';

export default class App extends React.Component {
  render() {
    return (<div>
      <div className="ui tabular menu">
        <a href="#" className="item active">
          GitHub
        </a>
        <a href="#" className="item">
          <strike>Twitter</strike>
        </a>
      </div>
      <h2 className="ui header">GitHub Scouter</h2>
      <Scouter />
      <div className="ui horizontal divider"><i className="like icon" /></div>
      <Note />
    </div>);
  }
}
App.propTypes = { children: React.PropTypes.object };
