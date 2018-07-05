import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs
    };
  }

  render() {
    return (
      <Wrapper>
        <Title>So many dogs!</Title>
      </Wrapper>
    );
  }
}

export default App;
