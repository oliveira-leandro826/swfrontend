import React from 'react';
import './ExtraSidebar.css';
import Api from '../services/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import ExtraSidebarItem from "./ExtraSidebarItem"



class ExtraSidebar extends React.Component{ 

	constructor (props){
		super(props);
		this.state={films:{}, people:{}, planets:{}, species:{}, starships:{}, vehicles:{}}
	}

  async componentDidMount(){

  	try{

    let resposta = await Api.visualizarpessoas(1);
    this.setState({people: resposta.data});
    
    resposta = await Api.visualizarfilmes(1);
    this.setState({films: resposta.data});

    resposta = await Api.visualizarplanetas(1);
    this.setState({planets: resposta.data});

    resposta = await Api.visualizarespecies(1);
    this.setState({species: resposta.data});

    resposta = await Api.visualizarnaves(2);
    this.setState({starships: resposta.data});

    resposta = await Api.visualizarveiculos(4);
    this.setState({vehicles: resposta.data});


    } catch(erro){console.log(erro)};
    
  }



  render (){
    return (
      <div className="extra-sidebar">
      <div className="extra-sidebar-header"> <FontAwesomeIcon icon={faCommentAlt} color="#fff" style={{paddingRight: 16}} /> <b>Resumo</b> </div>
      <ExtraSidebarItem categoria="Films" titulo={this.state.films.title} descricao = {`Diretor: ${this.state.films.director}`} link="/films/1"/>
      <ExtraSidebarItem categoria="People" titulo={this.state.people.name} descricao = {`Altura: ${this.state.people.height}cm`} link="/people/1"/>
      <ExtraSidebarItem categoria="Planets" titulo={this.state.planets.name} descricao = {`Clima: ${this.state.planets.climate}`} link="/planets/1"/>
      <ExtraSidebarItem categoria="Species" titulo={this.state.species.name} descricao = {`Classificação: ${this.state.species.classification}`} link="/species/1"/>
      <ExtraSidebarItem categoria="Starships" titulo={this.state.starships.name} descricao = {`Modelo: ${this.state.starships.model}`} link="/starships/2"/>
      <ExtraSidebarItem categoria="Vehicles" titulo={this.state.vehicles.name} descricao = {`Fabricante: ${this.state.vehicles.manufacturer}`} link="vehicles/4"/>
      </div>
    );
  }
}

export default ExtraSidebar;