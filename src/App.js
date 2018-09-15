import React from 'react';
import PropTypes from 'react-proptypes';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Follow from './components/Follow';
import Playlist from './components/Playlist';
import Header from './components/Header';
import Stars from './components/Stars';
import lists from './playlistData'
import { playlists as _playlists, uris } from './data'

const playlists =
  Object.values(_playlists)
    .map(p => ({ ...p, uri: uris[p.v] }))
    .sort((a, b) => Number(a.v) <= Number(b.v))

const KCSB = 'http://www.kcsb-radio.dreamhosters.com/';
const RFA = 'http://www.radiofreeamerica.com/dj/b-no-';

class App extends React.Component {

  static propTypes = {
    playlists: PropTypes.object,
    user: PropTypes.string,
    uris: PropTypes.object,
  };

  static defaultProps = {
    playlists: playlists,
    user: '1225146958',
    uris: uris,
  };

  onSelect = e => {
    window.location = `/${e.target.value}`
  }

  render() {
    const {
      playlists,
      user
    } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Stars />
          <Header />

          <div className="App_playlists">
            <div>
              <select className="List_list" onChange={this.onSelect}>
              {playlists.map(list =>
                <option value={list.v} className="List_item">
                  {list.v + '-' + list.title}
                </option>
              )}
              </select>
              <ol className="List_list">
              {playlists.map(list =>
                <li key={list.v} className="List_item">
                  <span className="ListItem_title">{list.v}</span>
                  <Link className="ListItem_link" to={`/${list.v}`}>{list.title}</Link>
                </li>
              )}
              </ol>
            </div>

            {playlists.map(list =>
              <Route key={list.v} path={`/${list.v}`} component={props =>
                <Playlist {...{
                  key: list.v,
                  user,
                  ...list
                }} />
                }
              />
            )}
          </div>
          <footer className="App_footer">
            <div>
            <p>
              Broadcasting live Monday 8PM on 91.9 FM in Santa Barbara or world wide at <a href={KCSB} target="_blank">KCSB.ORG</a>
            </p>
            <p>Missed the show? <a href={RFA} target="_blank">Stream the last two shows</a>.</p>
          </div>
            <Follow />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
