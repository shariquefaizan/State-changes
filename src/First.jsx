// example three of changing state in r js 


import React, { useState } from 'react'
import './First.css'

export default function First() {

	const [count, setCount] = useState(5);

	// minus functions 

	function mhundred() {
		setCount(prevCount => prevCount - 100)

	}

	function mten() {
		setCount(prevCount => prevCount - 10)

	}

	function decrement() {
		setCount(prevCount => prevCount - 1)

	}

	// plus functions

	function increment() {
		setCount(prevCount => prevCount + 1)

	}

	function hundred() {
		setCount(prevCount => prevCount + 100)

	}

	function ten() {
		setCount(prevCount => prevCount + 10)

	}

	return (
		<div>
			<h3>Click here  and make your LUCKY NUMBER </h3>
			<button className='buttons' onClick={mhundred}>- 100</button>

			<button className='buttons' onClick={mten}>   - 10</button>

			<button className='buttons' onClick={decrement}> - 1</button>

			<span> {count}</span>
			<button className='buttonsplus' onClick={increment}>+ 1 </button>
			<button className='buttonsplus' onClick={ten}>   + 10</button>

			<button className='buttonsplus' onClick={hundred}> + 100</button>
		</div>
	)
}




  