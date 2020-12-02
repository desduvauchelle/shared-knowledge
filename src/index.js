import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const Landing = React.lazy(() => import(`./pages/public/Landing`))
const Content = React.lazy(() => import(`./pages/public/Content`))


const App = () => {
	return <Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route path="/content/:subject?/:topic?/:segment?/:article?">
					<Content />
				</Route>
				<Route>
					<Landing />
				</Route>
			</Switch>
		</Suspense>
	</Router>
}


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById(`root`)
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
