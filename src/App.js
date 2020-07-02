import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './services/Api';


class App extends React.Component{ 

  async componentDidMount(){
    let resposta = await Api.listarpessoas();
    console.log(resposta.data);
    resposta = await Api.visualizarpessoas(1);
    console.log(resposta.data);
    resposta = await Api.buscarpessoas('vader');
    console.log(resposta.data);
  }



  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
