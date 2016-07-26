import React from 'react';
import Scouter from './Scouter.jsx';

export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Scouter</h2>
      <Scouter />
    </div>);
  }
}
App.propTypes = { children: React.PropTypes.object };
