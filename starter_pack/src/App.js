import React, { Component } from 'react';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json();
    this.setState({
      characters: data.results
    })
  }

  render() {
    return (
      <div className="App">
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;


// async componentDidMount() {
//   const response = await fetch('https://rickandmortyapi.com/api/character/');
//   const result = await response.json();
//   this.setState({
//     characters: result.results
//   });
// }

// render() {
//   return (
//     <div className="App">
//       <CardList>
//         {this.state.characters.map((char) => {
//           return <h1 key={char.id}>{char.name}</h1>;
//         })}
//       </CardList>
//     </div>
//   );
// }
// }
