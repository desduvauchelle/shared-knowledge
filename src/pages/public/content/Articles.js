import React from 'react'
import articlesData from '../../../data/articles'
import { useLocation } from 'react-router-dom'
import ArticleItem from './components/ArticleItem'

const Articles = ({ segment }) => {
	const location = useLocation()
	if (!segment) return null
	const baseTo = location.pathname
	return <div>
		<h3>{segment.name}</h3>
		<p>Addition is adding numbers together.</p>

		<h4>Top ranking</h4>
		{articlesData.map(article => {
			return <ArticleItem key={article.id} article={article} baseTo={baseTo} />
		})}

		<h4>Trending</h4>
		{articlesData.map(article => {
			return <ArticleItem key={article.id} article={article} baseTo={baseTo} />
		})}

		<h4>New</h4>
		{articlesData.map(article => {
			return <ArticleItem key={article.id} article={article} baseTo={baseTo} />
		})}
	</div>
}

export default Articles