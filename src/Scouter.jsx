import React from 'react';

const ScouterCard = (props) => {
  const { name, atk, int, agi } = props.data;
  return (
    <div className="column">
      <div className="ui card">
        <div className="content">
          <a className="header" href={`https://github.com/${name}`}>{name}</a>
          <div className="meta">@{name}</div>
          <div className="description">
            ATTACK:{atk}, INTELLIGENCE:{int} AGILITY:{agi}
          </div>
        </div>
        <div className="extra content">
          <span className="left floated like">
            <i className="like icon"></i>
            Like
          </span>
        </div>
      </div>
    </div>
  );
};
ScouterCard.propTypes = { data: React.PropTypes.object };

export default class Scouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scouterData: [{}],
    };
  }
  componentDidMount() {
    const uri = 'scouterData.json';
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
    return (<div className="ui three column grid">
      {cards}
    </div>);
  }
}
