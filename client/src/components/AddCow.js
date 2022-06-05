import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description: ''
    }
  }

  nameText(input) {
    this.setState({name: input.target.value})
  }

  descriptionText(input) {
    this.setState({description: input.target.value})
  }

  render () {
    return (
      <div>
        Name: <input type="text" onChange={(input) => this.nameText(input)}/>
        <br></br>
        Description: <input type="text" onChange={(input) => this.descriptionText(input)}/>
        <button onClick={() => {this.props.addCowToList(this.state.name, this.state.description)}}>Submit</button>
      </div>
    );
  }
}

export default AddCow;