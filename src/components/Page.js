import React from 'react';
import './Page.css';
import Api from '../services/Api';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import Content from "./Content";
import ExtraSidebar from "./ExtraSidebar";


class Page extends React.Component{ 

  



  render (){
    return (
      <div className="page">
        <Navbar/>
        <Sidebar/>
        <div className = "main-content"> <Content content = {this.props.content}/> <ExtraSidebar/> </div>
      </div>
    );
  }
}

export default Page;