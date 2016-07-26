import React from 'react';

class ScouterCard extends React.Component {
  render() {
    console.log(this.props);
    const { name, atk, int, agi } = this.props.data;
    return (<div>
      <p>NAME: {name}</p>
      <p>ATTACK:{atk}, INTELLIGENCE:{int} AGILITY:{agi}</p>
    </div>);
  }
}
ScouterCard.propTypes = { data: React.PropTypes.object };

export default class Scouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scouterData: [{}],
    };
  }
  componentDidMount() {
    const uri = '/scouterData.json';
    fetch(uri)
      .then(res => res.json())
      .then(json => {
        this.setState({ scouterData: json });
      })
      .catch(err => {
        console.log('error', err);
      })
      ;
  }
  render() {
    const cards = this.state.scouterData.map(e => <ScouterCard data={e} key={e.name} />);
    return (<div>
      {cards}
    </div>);
  }
}
