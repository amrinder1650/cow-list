import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './components/CowList.js';
import AddCow from './components/AddCow.js';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: '',
      description: ''
    }
  }

  componentDidMount(){
    $.ajax({
      url: '/api/cows',
      type: 'GET',
      success: (result) => {
        console.log('Successful ajax get');
        console.log(result);
        this.setState({
          list: [...result],
        });
      },
      error: function() {
        console.log('Error ajax get')
      }
    });
  }

  addCowToList(name, description) {
    console.log(name,description);
    if (name !== '' && description !== '') {
      $.ajax({
        url: '/api/cows',
        type: 'POST',
        data: {data: {name: name, description: description}},
        success: (result) => {
          console.log('Successful ajax post');
          $.ajax({
            url: '/api/cows',
            type: 'GET',
            success: (result) => {
              console.log('Successful ajax get');
              console.log(result);
              this.setState({
                list: [...result]
              });
            },
            error: function() {
              console.log('Error ajax get')
            }
          });
        },
        error: function() {
          console.log('Error ajax post')
        }
      });
    }
  }

  nameClick(event) {
    var description;
    var list = [...this.state.list];

    for (var i = 0; i < list.length; i++) {
      if(list[i].name === event.target.textContent) {
        description = list[i].description;
      }
    }

    console.log(event.target.textContent);

    this.setState({
      name: event.target.textContent,
      description: description
    })
  }

  render () {
    return (
      <div>
        <h1>Cow List</h1>
        <h2>Name: {this.state.name} <br></br>
        Description: {this.state.description}</h2>
        <AddCow addCowToList={this.addCowToList.bind(this)}/>
        <CowList cowList={this.state.list} nameClick={this.nameClick.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



