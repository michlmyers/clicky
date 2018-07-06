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
        <Title><h1>Pet a pooch!</h1>
        <h3>Click a pic to pet a pooch. Only pet a dog
          once to increase your score!</h3>
          <h4>High Score : 
          <br />
          Current Score :</h4>
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
