import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json';
import DogCard from './components/DogCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

let highScore = 0;
let currentScore = 0;
let alertMsg = '';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dogs,
      highScore,
      currentScore,
      alertMsg
    };
  }

  dogClick = id => {

    const dogs = this.state.dogs;
    const dogClick = dogs.filter(dog => dog.id === id);

    // if dog pic was already clicked
    if (dogClick[0].wasClicked) {
      currentScore = 0;
      alertMsg = `You already pet them, you've been bitten. Try again!`;
      for (let i = 0; i < dogs.length; i++) {
        dogs[i].wasClicked = false;
      }
      this.setState({ currentScore });
      this.setState({ dogs });
      this.setState({ alertMsg });
    }
    // if pic was not clicked
    else if (currentScore < 12) {
      dogClick[0].wasClicked = true;
      currentScore++;
      alertMsg = 'Good human. Pet another dog!';
      if (currentScore > highScore) {
        highScore = currentScore;
        this.setState({ highScore });
      }
      // sorts the pics randomly
      dogs.sort(function (a, b) { return 0.5 - Math.random() });
      this.setState({ currentScore });
      this.setState({ dogs });
      this.setState({ alertMsg });
    } else {
      console.log('someting');
    };
  }

  render() {
    return (
      <Wrapper>
        <main>
          <Title>
            <h1>Pet a pooch!</h1>
            <h3>Click a pic to pet a pooch. Only pet a dog
              once to increase your score!</h3>
            <h4><span>High Score : {this.state.highScore}</span>
              <br />
              <span>Current Score : {this.state.currentScore}</span>
            </h4>
            <h3> {this.state.alertMsg} </h3>;
          </Title>
          {this.state.dogs.map(dog => (
            <DogCard
              image={dog.image}
              id={dog.id}
              key={dog.id}
              dogClick={this.dogClick}
            />
          ))}
        </main>
      </Wrapper>
    );
  }
}

export default App;
