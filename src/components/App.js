import React, {Component} from 'react'
import Home from './home'
import Privacy from './privacy'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

class App extends Component{
	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/privacy">
						<Privacy />
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App

