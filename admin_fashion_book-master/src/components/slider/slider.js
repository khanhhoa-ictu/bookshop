import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Slider extends Component {
    render() {
        return (
                <div id="sidebar" className="nav-collapse">
                    <ul className="sidebar-menu">
                        <li className="active">
                            <a className="" href="/">
                                <i className="icon_house_alt"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:" className=""> 
                                <i className="icon_document_alt"></i>
                                <span>Quản Lý Sách</span>
                                <span className="menu-arrow arrow_carrot-right"></span>
                            </a>
                            <ul className="sub">
                                <li><a className="" href="/bookmanager">Sách </a></li>
                                <li><a className="" href="/categorymanager">Thể Loại </a></li>
                                <li><a className="" href="/publishermanager">Nhà Xuất Bản</a></li>
                                <li><a className="" href="/authormanager">Tác Giả</a></li>
                                <li><a className="" href="/usermanager">Người Dùng</a></li>
                             
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <a href="javascript:;" className="">
                                <i className="icon_desktop"></i>
                                <span>Đơn Hàng</span>
                                <span className="menu-arrow arrow_carrot-right"></span>
                            </a>
                            <ul className="sub">
                            <li><a className="" href="/billmanager">Đơn Hàng</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="" href="/statistical">
                                <i className="icon_genius"></i>
                                <span>Thống Kê</span>
                            </a>
                        </li>
                       

                        <li className="sub-menu">
                            <a href="javascript:;" className="">
                                <i className="icon_table"></i>
                                <span>Tables</span>
                                <span className="menu-arrow arrow_carrot-right"></span>
                            </a>
                            <ul className="sub">
                                <li><a className="" href="basic_table.html">Basic Table</a></li>
                            </ul>
                        </li>

                        <li className="sub-menu">
                            <a href="javascript:;" className="">
                                <i className="icon_documents_alt"></i>
                                <span>Pages</span>
                                <span className="menu-arrow arrow_carrot-right"></span>
                            </a>
                            <ul className="sub">
                                <li><a className="" href="profile.html">Profile</a></li>
                                <li><a className="" href="login.html"><span>Login Page</span></a></li>
                                <li><a className="" href="contact.html"><span>Contact Page</span></a></li>
                                <li><a className="" href="blank.html">Blank Page</a></li>
                                <li><a className="" href="404.html">404 Error</a></li>
                            </ul>
                        </li>

                    </ul>
      </div>
        )
    }
}
export default Slider