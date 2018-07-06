import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json';
import DogCard from './components/DogCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';

let highScore = 0;
let currentScore = 0;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dogs,
      highScore,
      currentScore
    };
  }

  dogClick = id => {

    const dogs = this.state.dogs;
    const dogClick = dogs.filter(dog => dog.id === id);

    if (dogClick[0].wasClicked) {
      currentScore = 0;
      for (let i = 0; i < dogs.length; i++) {
        dogs[i].wasClicked = false;
      }
      this.setState({ currentScore });
      this.setState({ dogs });
    } else if (currentScore < 12) {
      dogClick[0].wasClicked = true;
      currentScore++;
      if (currentScore > highScore) {
        highScore = currentScore;
        this.setState({ highScore });
      }
      dogs.sort(function (a, b) { return 0.5 - Math.random() });
      this.setState({ currentScore });
      this.setState({ dogs });
    };

    {/* hiding this next section to test 
    console.log('click worked and current score is' + currentScore);
    console.log('and highscore is' + highScore);
    dogs.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ dogs });
    */}
  }


  render() {
    return (
      <Wrapper>
        <main>
          <Title>
            <h1>Pet a pooch!</h1>
            <h3>Click a pic to pet a pooch. Only pet a dog
              once to increase your score!</h3>
            <h4>High Score : {this.state.highScore}
              <br />
              Current Score : {this.state.currentScore}
            </h4>
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
