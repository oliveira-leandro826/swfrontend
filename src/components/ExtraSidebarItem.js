import React from 'react';
import './ExtraSidebarItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export default function ExtraSidebarItem (props) { 

  




    return (
      <div className="extra-sidebar-item-container"> <small> <b> {props.categoria} </b> </small> <h2> {props.titulo} </h2> <p> {props.descricao} </p> <a href={props.link}> <FontAwesomeIcon icon={faArrowRight} color="#e56717" /> </a>
      

      </div>
    );
}