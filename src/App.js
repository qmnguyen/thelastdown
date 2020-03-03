import React from 'react';
import './App.css';
import Greeting from './Greeting';
import { LoginButton, LogoutButton } from './Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div className="TLD-container">
        <header className="TLD-header">
          <p>
            The Last Down
          </p>
        </header>
        <div className="TLD-greeting">
          <Greeting isLoggedIn={isLoggedIn} />
          { button }
        </div>
      </div>
    );
  }
}

export default App;

// You can define helper functions at the end here.
