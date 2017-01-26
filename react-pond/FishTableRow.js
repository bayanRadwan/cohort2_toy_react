//modify this file
class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({clicked: !this.state.clicked})}>
        <td className="fish-name">Nemoo</td>
        <td>
          <img src="this.props.fish.image"/>
        </td>
        {this.state.clicked ? <td className="fish-description">Does anyone know where my dad is?</td> : this.props.fish.description}
      </tr>
    )
  }
}
