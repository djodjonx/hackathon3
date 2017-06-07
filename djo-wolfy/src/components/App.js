import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

class App extends Component {

  state = {
    pseudo: ''
  };

  // welcomePseudo = event => {
  //   event.preventDefault();
  //   const pseudo = this.pseudo.value;
  //   console.log(pseudo);
  //   this.setState({pseudo})
  // };

  changeFirstName = (event) => {
    const { contact } = this.state;
    const newContact = {
      ...contact,
      firstName: event.target.value
    };
    this.setState({ contact: newContact });
  }

  changeLastName = (event) => {
    const { contact } = this.state;
    const newContact = {
      ...contact,
      lastName: event.target.value
    };
    this.setState({ contact: newContact });
  }

  changeEmail = (event) => {
    const { contact } = this.state;
    const newContact = {
      ...contact,
      email: event.target.value
    };
    this.setState({ contact: newContact });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Discover them !</h2>
          <h3></h3>
        </div>
        <div>
         <input type="text" onChange={this.changeFirstName} value={this.state.contact.firstName}/>
         <input type="text" onChange={this.changeLastName} value={this.state.contact.lastName}/>
         <input type="text" onChange={this.changeEmail} value={this.state.contact.email}/>
       </div>
        <div className="App-intro">
          <form>
            <label>
              Name:
              <input type="text" name="name" required ref={input => {
                this.pseudo = input
              }}/>
            </label>
            <button type="submit">Suivant</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
  // firstname lastname age email location score
