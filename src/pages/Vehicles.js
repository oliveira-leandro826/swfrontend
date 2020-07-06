import React from 'react';
import Api from '../services/Api';
import Page from "../components/Page";


class Vehicles extends React.Component{ 


  constructor(props){
    super(props);
    this.state={items: [], rendered: undefined};
  }

  async componentDidMount(){
    let resposta = await Api.listarveiculos();
    this.setState({items: resposta.data.results});
    this.renderizarElementos();
    
  }

  renderizarElementos = () =>{
    let rendered = this.state.items.map((item,index) =>
    <div key={index.toString()}> <h1> {item.name} </h1> <p>{`modelo: ${item.model}`}</p>
     <p>{`Fabricante: ${item.manufacturer}`}</p> 
     <p>{`Velocidade máxima: ${item.max_atmosphering_speed}`}</p> </div>);
    this.setState({rendered});

  }



  render (){
    return (
      <Page content = {this.state.rendered}/>
    );
  }
}

export default Vehicles;