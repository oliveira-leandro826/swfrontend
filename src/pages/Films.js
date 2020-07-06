import React from 'react';
import Api from '../services/Api';
import Page from "../components/Page";


class Films extends React.Component{ 


  constructor(props){
    super(props);
    this.state={items: [], rendered: undefined};
  }

  async componentDidMount(){
    let resposta = await Api.listarfilmes();
    this.setState({items: resposta.data.results});
    this.renderizarElementos();
    
  }

  renderizarElementos = () =>{
    let rendered = this.state.items.map((item,index) =>
    <div key={index.toString()}> <h1> {item.title} </h1> <p>{`diretor: ${item.director}`}</p> <p>{`abertura: ${item.opening_crawl}`}</p></div>);
    this.setState({rendered});

  }



  render (){
    return (
      <Page content = {this.state.rendered}/>
    );
  }
}

export default Films;