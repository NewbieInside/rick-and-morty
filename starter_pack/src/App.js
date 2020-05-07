import React, { Component, Fragment } from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    this.setState({
      characters: data.results,
      searchField: '',
    });
  }

  render() {
    const { characters, searchField } = this.state;

    const handleSearch = characters.filter((char) => {
      return char.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <Fragment>
        <Header />
        <SearchBox
          placeholder="Search for character"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList className="cardlist-container" characters={handleSearch} />
      </Fragment>
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
