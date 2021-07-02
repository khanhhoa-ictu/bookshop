import React, { Component } from 'react'
import { Link} from 'react-router-dom'
const VerifyPayment = () => (
    <div className="container text-center">
		<div className="logo-404">
		<div className='null-cart'>
            <img src="/assets/images/home/logo1.gif" alt="" />
            
          </div>
		</div>
		<div className="content-404">
			<h1><b>Congratulations!!!
			</b> You have verified payment</h1>
			<h2><Link to="/">Trở Về Trang Chủ</Link></h2>
		</div>
	</div>
)
export default VerifyPayment