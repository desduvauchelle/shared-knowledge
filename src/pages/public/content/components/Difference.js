import React from 'react'
import { diffChars } from 'diff'
// const diff = require(`diff`)
// console.log(diff)


const Difference = ({
	inputA = ``,
	inputB = ``
}) => {

	var diff = diffChars(inputA, inputB)
	var result = diff.map(function (part, index) {
		var spanStyle = {
			backgroundColor: part.added ? `lightgreen` : part.removed ? `salmon` : `lightgrey`
		}
		return <span key={index} style={spanStyle}>{part.value}</span>
	})
	return (
		<pre className='diff-result'>
			{result}
		</pre>
	)

}

export default Difference