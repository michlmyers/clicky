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
        <main>
        <Title><h1>So many dogs, pet(click) a pooch!</h1>
          <h2>High Score : 
          <br />
          Current Score :</h2>
        </Title>
        {this.state.dogs.map(dog => (
        <DogCard
        image={dog.image}
        id={dog.id}
        wasClicked={dog.wasClicked}
        />
        ))}
        </main>
      </Wrapper>
    );
  }
}

export default App;
