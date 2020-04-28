import React, {Component} from 'react'
import '../styles/privacy.css'

class Privacy extends Component{
	render(){
		return(
			<main className="privacy">
				<h1>General</h1>
				<p>Clicks are stored locally, and will be automatically removed by clearing history/deleting the app. This app does not collect any personal information from a user, nor does it send any data to a server.</p>
				<h1>Credits</h1>
				<p>This app was created by <a href="https://github.com/backentrancehacker" >@AdCharity</a>.</p>
			</main>
		)
	}
}

export default Privacy

