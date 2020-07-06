import React from 'react';
import Api from '../services/Api';
import Page from "../components/Page";


class Species extends React.Component{ 


  constructor(props){
    super(props);
    this.state={items: [], rendered: undefined};
  }

  async componentDidMount(){
    let resposta = await Api.listarespecies();
    this.setState({items: resposta.data.results});
    this.renderizarElementos();
    
  }

  renderizarElementos = () =>{
    let rendered = this.state.items.map((item,index) =>
    <div key={index.toString()}> <h1> {item.name} </h1> <p>{`classificação: ${item.classification}`}</p>
    <p>{`linguagem: ${item.language}`}</p>
     <p>{`cor de pele: ${item.skin_colors}`}</p> 
     <p>{`cor do cabelo: ${item.hair_colors}`}</p>
     <p>{`cor dos olhos: ${item.eye_colors}`}</p> </div>);
    this.setState({rendered});

  }



  render (){
    return (
      <Page content = {this.state.rendered}/>
    );
  }
}

export default Species;