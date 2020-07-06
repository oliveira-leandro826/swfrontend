import React from 'react';
import Api from '../services/Api';
import Page from "../components/Page";


class People extends React.Component{ 


  constructor(props){
    super(props);
    this.state={items: [], rendered: undefined};
  }

  async componentDidMount(){
    let resposta = await Api.listarpessoas();
    this.setState({items: resposta.data.results});
    this.renderizarElementos();
    
  }

  renderizarElementos = () =>{
    let rendered = this.state.items.map((item,index) =>
    <div key={index.toString()}> <h1> {item.name} </h1> <p>{`altura: ${item.height}`}</p>
    <p>{`peso: ${item.mass}`}</p>
     <p>{`cor do cabelo: ${item.hair_color}`}</p> 
     <p>{`cor do olho: ${item.eye_color}`}</p>
     <p>{`cor da pele: ${item.skin_color}`}</p> </div>);
    this.setState({rendered});

  }



  render (){
    return (
      <Page content = {this.state.rendered}/>
    );
  }
}

export default People;