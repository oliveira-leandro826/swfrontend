import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './services/Api';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar"


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
        <Navbar/>
        <Sidebar/>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>
        <p>Gabriel lindo</p>

      </div>
    );
  }
}

export default App;
