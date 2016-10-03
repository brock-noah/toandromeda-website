import React, { PropTypes } from 'react';
import './App.css';
import Follow from './components/Follow';
import Playlist from './components/Playlist';
import Header from './components/Header';
import Stars from './components/Stars';

const lists = [{
  name: 'noise rock vomit',
  id: '0tF9WHvWir9ukih9D6FMSc'
},{
  name: 'clear rays',
  id: '22LtQBaRJHUee5AymjjspY'
},{
  name: 'mellow haze',
  id: '4xI8fnw5sJJVIKrkcXlqC0'
},{
  name: 'shadow electronic',
  id: '7uRsdAnovHesAk5iv66jhc',
}];

class App extends React.Component {

  static propTypes = {
    playlists: PropTypes.array,
    user: PropTypes.string
  };

  static defaultProps = {
    playlists: lists,
    user: '1225146958'
  };

  render() {
    const {
      playlists,
      user
    } = this.props;

    return (
      <div className="App">
        <Stars />
        <Header />
        <div className="App_playlists">
          {playlists.map(list =>
            <Playlist {...{
              key: list.id,
              user,
              ...list
            }} />
          )}
        </div>
        <footer className="App_footer">
          <Follow />
        </footer>
      </div>
    );
  }
}

export default App;
