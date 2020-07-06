import React from 'react';
import Api from '../services/Api';
import Page from "../components/Page";


class Planets extends React.Component{ 


  constructor(props){
    super(props);
    this.state={items: [], rendered: undefined};
  }

  async componentDidMount(){
    let resposta = await Api.listarplanetas();
    this.setState({items: resposta.data.results});
    this.renderizarElementos();
    
  }

  renderizarElementos = () =>{
    let rendered = this.state.items.map((item,index) =>
    <div key={index.toString()}> <h1> {item.name} </h1> <p>{`clima: ${item.climate}`}</p>
    <p>{`terreno: ${item.terrain}`}</p>
     <p>{`população: ${item.population}`}</p> 
     <p>{`gravidade: ${item.gravity}`}</p>
     <p>{`diâmetro : ${item.diameter}`}</p> </div>);
    this.setState({rendered});

  }



  render (){
    return (
      <Page content = {this.state.rendered}/>
    );
  }
}

export default Planets;