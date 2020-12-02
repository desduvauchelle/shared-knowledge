import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import structure from '../../../../data/structure'
import articlesData from '../../../../data/articles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`

`
const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid #cacaca;
	a {
		padding: 11px;
		font-size: 18px;
		border-right: 1px solid #cacaca;
	}
	span {
		padding-left: 11px;
		flex: 1;
		text-overflow: ellipsis;
	}
`

const ColumnHeader = ({ to, text }) => {
	return <HeaderWrapper>
		{to && <Link to={to}><FontAwesomeIcon icon={faArrowLeft} /></Link>}
		<span>{text}</span>
	</HeaderWrapper>
}

const NavigationBar = () => {
	// /:subject?/:topic?/:segment?
	const { subject, topic, segment, article } = useParams()

	let subjects = structure.filter(i => i.type === `subject`)
	let topics = structure.filter(i => i.type === `topic`)
	let segments = structure.filter(i => i.type === `segment`)
	let articles = articlesData.filter(() => true)
	if (subject) {
		topics = topics.filter(i => i.parentSubjectId === subject)
	}
	if (topic) {
		segments = segments.filter(i => i.parentTopicId === topic)
	}


	const BASE = `/content`
	return <Wrapper>
		{!subject && <Fragment>
			<ColumnHeader text="Pick a subject" />
			<ul className="nav flex-column">
				{subjects.map(subj => {
					return <li className="nav-item" key={subj.id}>
						<Link className={`nav-link`} to={`${BASE}/${subj.id}`}>{subj.name}</Link>
					</li>
				})}
			</ul>
		</Fragment>}
		{(subject && !topic) && <Fragment>
			<ColumnHeader to={`${BASE}/${subject}`} text="Pick a topic" />
			<p>Pick a topic:</p>
			<ul className="nav flex-column">
				{topics.map(top => {
					return <li className="nav-item" key={top.id}>
						<Link className={`nav-link`} to={`${BASE}/${top.parentSubjectId}/${top.id}`}>{top.name}</Link>
					</li>
				})}
			</ul>
		</Fragment>}
		{(subject && topic && !segment) && <Fragment>
			<ColumnHeader to={`${BASE}/${subject}/${topic}`} text="Pick a segment" />
			<ul className="nav flex-column">
				{segments.map(seg => {
					return <li className="nav-item" key={seg.id}>
						<Link className={`nav-link ${segment === seg.id ? `disabled` : ``}`} to={`${BASE}/${seg.parentSubjectId}/${seg.parentTopicId}/${seg.id}`}>{seg.name}</Link>
					</li>
				})}
			</ul>
		</Fragment>}
		{(subject && topic && segment) && <Fragment>
			<ColumnHeader to={`${BASE}/${subject}/${topic}/${segment}`} text="Pick an article" />
			<ul className="nav flex-column">
				{articles.map(art => {
					return <li className="nav-item" key={art.id}>
						<Link className={`nav-link ${article === art.id ? `disabled` : ``}`} to={`${BASE}/${subject}/${topic}/${segment}/${art.id}`}>({art.votes}) {art.title}</Link>
					</li>
				})}
			</ul>
		</Fragment>}
	</Wrapper>
}

export default NavigationBar