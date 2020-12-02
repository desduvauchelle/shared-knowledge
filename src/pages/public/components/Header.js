/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isCollapsed, setCollapsed] = useState(true)
	const [search, setSearch] = useState(``)

	const toggleCollapse = (e) => {
		e.preventDefault()
		setCollapsed(!isCollapsed)
	}

	const onSearch = (e) => {
		e.preventDefault()
		window.alert(`Coming soon!`)
	}

	return <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="#">Shared knowledge</a>
		<button className={`navbar-toggler ${isCollapsed ? `collapsed` : ``}`} type="button" data-toggle="collapse"
			data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation" onClick={toggleCollapse}>
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className={`collapse navbar-collapse ${isCollapsed ? `` : `show`}`} id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/content">Content</Link>
				</li>
			</ul>
			<form onSubmit={onSearch} className="form-inline my-2 my-lg-0">
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search" />
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
}


export default Header