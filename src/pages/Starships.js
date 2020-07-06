import React from 'react';
import Api from '../services/Api';
import Page from "../components/Page";


class Starships extends React.Component{ 


  constructor(props){
    super(props);
    this.state={items: [], rendered: undefined};
  }

  async componentDidMount(){
    let resposta = await Api.listarnaves();
    this.setState({items: resposta.data.results});
    this.renderizarElementos();
    
  }

  renderizarElementos = () =>{
    let rendered = this.state.items.map((item,index) =>
    <div key={index.toString()}> <h1> {item.name} </h1> <p>{`modelo: ${item.model}`}</p>
    <p>{`fabricante: ${item.manufacturer}`}</p>
     <p>{`tamanho da equipe: ${item.crew}`}</p> 
     <p>{`quantidade de passageiros: ${item.passengers}`}</p>
     <p>{`classe : ${item.starship_class}`}</p> </div>);
    this.setState({rendered});

  }



  render (){
    return (
      <Page content = {this.state.rendered}/>
    );
  }
}

export default Starships;