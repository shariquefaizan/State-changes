// example one of changing state in r js 



import React, { Component } from 'react'
import './First.css'

class Smart extends Component {
constructor(props){
	super(props)

	// Set initial state
	this.state = {greeting :
		' Buy Just At 999'}

	// Binding this keyword
	this.updateState = this.updateState.bind(this)
}

updateState(){
	// Changing state
	this.setState({greeting :
				'Welcome to SMART family!!'})
}

render(){
	return (
	<div>
	<h2>Click for buying our premium servies of SAMT MART </h2>
	<p>{this.state.greeting}</p>

		{/* Set click handler */}
		<button  className='buttonspluss' onClick={this.updateState}>
Click for subscribe
		</button>
	</div>
	)
}
}

export default Smart;


