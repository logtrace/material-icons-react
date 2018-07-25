import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Material Icons React</h1>
        </header>
        <div className="App-content">
          <table>
            <tr>
              <td>Default</td>
              <td><MaterialIcon icon="dashboard" /></td>
            </tr>
            <tr>
              <td>Default</td>
              <td><MaterialIcon icon="alarm_on" /></td>
            </tr>
            <tr>
              <td>Large</td>
              <td><MaterialIcon icon="dashboard" size='large' /></td>
            </tr>
            <tr>
              <td>Custom size(100)</td>
              <td><MaterialIcon icon="dashboard" size={100} /></td>
            </tr>
            <tr>
              <td>Inverted</td>
              <td><MaterialIcon icon="dashboard" invert /></td>
            </tr>
            <tr>
              <td>Inactive</td>
              <td><MaterialIcon icon="dashboard" inactive /></td>
            </tr>
            <tr>
              <td>Color from pallete(amber._200)</td>
              <td><MaterialIcon icon="dashboard" color={colorPalette.amber._200}/></td>
            </tr>
            <tr>
              <td>Color from pallete(amber.A700)</td>
              <td><MaterialIcon icon="dashboard" color={colorPalette.amber.A700}/></td>
            </tr>
            <tr>
              <td>Custom color(#7bb92f)</td>
              <td><MaterialIcon icon="dashboard" color='#7bb92f' /></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
