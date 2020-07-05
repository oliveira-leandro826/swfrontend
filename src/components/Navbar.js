import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'


export default function Navbar (props){
	return (
		<nav> 
			<FontAwesomeIcon icon={faBars} color="#fff" style={{background: "#858585", padding: 32}} />
			<div className= "menu">
				<a href="/">SW</a>
				<div>
					<a href="/filmes">Filmes</a>
					<a href="/pessoas">Pessoas</a>
					<a href="/naves">Naves</a>
					<a href="/veiculos">Veículos</a>
					<a href="/especies">Espécies</a>
					<a href="/planetas">Planetas</a>
					<input type= "text" value={props.search} onChange = {props.handleChange} placeholder="Buscar"/>
					<FontAwesomeIcon icon={faSearch} color="#fff" />
				</div>
			</div>
		</nav>
	);
}