import React, { Component } from 'react'
import { Link} from 'react-router-dom'
const NotFound = () => (
    <div className="container text-center">
		<div className="logo-404">
			<Link to="/"><img src="/assets/images/home/logo.png" alt="" /></Link>
		</div>
		<div className="content-404">
			<img src="/assets/images/404/404.png" className="img-responsive" alt="" />
			<h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
			<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
			<h2><Link to="/">Bring me back Home</Link></h2>
		</div>
	</div>
)
export default NotFound