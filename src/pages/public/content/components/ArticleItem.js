import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	background: #f2f2f2;
	padding: 5px;
	margin-bottom: 5px;
	position: relative;
`
const Overlay = styled(Link)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	border: none;
	background: none;
`
const Left = styled.div`
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	span{
		font-size: 24px;
		font-weight: bold;
		color: #cacaca;
	}
`
const Right = styled.div`

`


const ArticleItem = ({ baseTo, article }) => {

	return <Wrapper>
		<Left>
			<span>{article.votes}</span>
		</Left>
		<Right>
			<h5>{article.title}</h5>
			<Overlay to={`${baseTo}/${article.id}`} />
		</Right>
	</Wrapper>
}

export default ArticleItem