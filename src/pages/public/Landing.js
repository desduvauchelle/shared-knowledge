import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'

const Wrapper = styled.div`

`

const Landing = () => {
	return <Wrapper>
		<Header />
		<div className="jumbotron">
			<h1 className="display-4">Shared knowledge</h1>
			<p className="lead">Sharing the worlds knowledge through demoratic votes.</p>
			<hr className="my-4" />
			<p>User generated courses in all formats (video, text, images).</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>
		</div>
	</Wrapper>
}

export default Landing