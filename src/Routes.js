import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";


export default function Routes(){

	return (<BrowserRouter> <Switch> <Route path="/" exact component={Films}/>
	 <Route path="/pessoas" component={People}/> 
	 <Route path="/planetas" component={Planets}/>
	 <Route path="/especies" component={Species}/>
	 <Route path="/naves" component={Starships}/>
	 <Route path="/veiculos" component={Vehicles}/>
	 <Route path="/filmes" component={Films}/>
	 </Switch> </BrowserRouter>);



}