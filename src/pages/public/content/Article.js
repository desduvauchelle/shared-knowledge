import React, { useState } from 'react'
import MEDitor from "@uiw/react-md-editor"
import Diff from './components/Difference'
// https://github.com/uiwjs/react-md-editor

const mkdStr = `# Markdown Editor for React

**Hello world!!!**

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`


const Article = ({ article }) => {
	const [isEdit, setEdit] = useState(false)
	const [value, setValue] = useState(mkdStr)

	const onEdit = (e) => {
		e.preventDefault()
		setEdit(!isEdit)
	}

	return <div>
		<div style={{ display: `flex`, marginBottom: 30 }}>
			<h4 style={{ flex: 1 }}>{article.title}</h4>
			<button className="btn btn-secondary btn-outline" onClick={onEdit}>Edit article</button>
		</div>

		{!isEdit && <MEDitor.Markdown source={value} />}

		{isEdit && <div>
			<MEDitor
				height="400"
				value={value}
				onChange={setValue}
				preview="edit" />

			<h6>Differences</h6>
			<Diff inputA={mkdStr} inputB={value} />
		</div>}


		<p>Vote up or down the article...</p>

		<p>Cross posts to compare with others?</p>
	</div>
}

export default Article