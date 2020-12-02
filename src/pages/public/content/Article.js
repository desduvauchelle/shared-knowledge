import React from 'react'


const Article = ({ article }) => {
	return <div>
		<h4>{article.title}</h4>
		<p>Some content...</p>

		<p>Vote up or down the article...</p>

		<p>Cross posts to compare with others?</p>
	</div>
}

export default Article