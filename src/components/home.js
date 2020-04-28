import React, {Component} from 'react'
import sparkle from './sparkle'
import '../styles/home.css'
import '../styles/sparkle.css'

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			count: JSON.parse(localStorage.getItem('count')) || 0
		}
		this.handleClick = this.handleClick.bind(this)
		this.sparkle = sparkle.bind(this)
	}
	handleClick(){
		this.setState(prevState => {
			localStorage.setItem('count', prevState.count + 1 || 0)
			return {
				count: prevState.count + 1
			}
		})
	}
	render(){
		return(
			<main className="container">
				<h1 className="count">{this.state.count}</h1>
				<div onClick={this.sparkle}>
					<button onClick={this.handleClick}>CLICK</button>
				</div>
			</main>
		)
	}
}

export default Home

