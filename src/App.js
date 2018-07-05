import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json';
import DogCard from './components/DogCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

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
        {this.state.dogs.map(dog => (
        <DogCard
        image={dog.image}
        id={dog.id}
        wasClicked={dog.wasClicked}
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
