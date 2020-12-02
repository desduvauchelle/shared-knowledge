import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import NavigationBar from './content/components/NavigationBar'
import { useParams, Link } from 'react-router-dom'
import structure from '../../data/structure'
import articleData from '../../data/articles'
import Article from './content/Article'
import Articles from './content/Articles'

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`
const Inside = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
	.left {
		max-width: 300px;
		border-right: 1px solid #cacaca;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
	.right {
		width: 100%;
	}
`
const Segment = styled.div`
	padding: 10px 40px;
`



const Content = () => {
	const { subject, topic, segment, article } = useParams()
	let subjectItem, topicItem, segmentItem

	const links = [{ to: `/content`, name: `Base` }]
	if (subject) {
		const potSubj = structure.filter(i => i.id == subject)
		if (potSubj.length === 0) throw `Subject does not exist!`
		subjectItem = potSubj[0]
		links.push({ to: `/content/${subjectItem.id}`, name: subjectItem.name })
	}
	if (topic) {
		const potTop = structure.filter(i => i.id == topic)
		if (potTop.length === 0) throw `Topic does not exist!`
		topicItem = potTop[0]
		links.push({ to: `/content/${topicItem.parentSubjectId}/${topicItem.id}`, name: topicItem.name })
	}
	if (segment) {
		const potSegment = structure.filter(i => i.id == segment)
		if (potSegment.length === 0) throw `Segment does not exist!`
		segmentItem = potSegment[0]
		links.push({ to: `/content/${segmentItem.parentSubjectId}/${segmentItem.parentTopicId}/${segmentItem.id}`, name: segmentItem.name })
	}

	let articleItem
	if (article) {
		const potArticle = articleData.filter(a => a.id == article)
		if (potArticle.length === 0) throw `Article does not exist`
		articleItem = potArticle[0]
		links.push({ to: `/content/${subject}/${topic}/${segment}/${article}`, name: articleItem.title })
	}

	return <Wrapper>
		<Header />
		<Inside>
			<div className="left">
				<NavigationBar />
			</div>
			<div className="right">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						{links.map((link, i) => {
							let isCurrent = false
							let attr = { className: `breadcrumb-item` }
							if (i == links.length - 1) { // aka last
								attr.className += ` active`
								attr[`aria-current`] = `page`
								isCurrent = true
							}
							return <li key={i} {...attr}>
								{isCurrent ? link.name : <Link to={link.to}>{link.name}</Link>}
							</li>
						})}
					</ol>
				</nav>

				{(segment && !article) && <Segment>
					<Articles segment={segmentItem} />
				</Segment>}
				{(segment && articleItem) && <Segment>
					<Articles article={articleItem} />
				</Segment>}
			</div>

		</Inside>
	</Wrapper>
}

export default Content