import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./Sidebar.css"

export default function Sidebar(){
	return (<div className="sidebar"> 
		<div> <FontAwesomeIcon icon= {faInstagram} color="white" style={{padding:32}}/> </div>
		<div> <FontAwesomeIcon icon= {faFacebook} color="white" style={{padding:32}}/> </div>
		<div> <FontAwesomeIcon icon= {faTwitter} color="white" style={{padding:32}}/> </div> </div>);
	
}