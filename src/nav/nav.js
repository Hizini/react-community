import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss';
import Logout from '../dialog/Logout';
class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpenLogoutDialog: false,
        }
    }

    // onClickNav = e => path => {
    //     const { history } = this.props

    //     history.push ('/path')
    // }

    // handleClickLogoutBtn = () => {

    //     localStorage.removeItem('token')
    //     this.setState({ isOpenLogoutDialog: false })
    // }

    // handleClickNoLogoutBtn = () => {
    //     this.setState ({ isOpenLogoutDialog: false})
    // }

    // handleClickLogout = () => {
    //     this.setState({ isOpenLogoutDialog: true })
    // }

    handleLogoutDialog = (isOpen, flag) => {
        if (flag) {
            localStorage.removeItem('token')
        }

        this.setState({ isOpenLogoutDialog: isOpen })
    }

    renderNav = () => {
        const token = localStorage.getItem('token')

        if (token) return (
            // <div onClick={this.onClickNav('path')}>
            //     <img className='mypage' src='img/mypage.png' alt='mypage' />
            // </div>
            <>
                <span className='item'>
                    <img className='logout' src='img/logout.png' alt='logout' onClick={() => this.handleLogoutDialog(true)}/>
                </span>
                <Link className='item' to="/mypage">
                    <img className='mypage' src={process.env.PUBLIC_URL + '/img/mypage.png'} alt='mypage' />
                </Link>
            </>
        )

        return (
            <>
                <Link className='item' to="/signIn">
                    <img className='login' src={process.env.PUBLIC_URL + '/img/login.png'} alt='login' />
                </Link>
                <Link className='item' to="/join">
                    <img className='join' src={process.env.PUBLIC_URL + '/img/join.png'} alt='join' />
                </Link>
            </>
        )
    }

    render() {
        const { isOpenLogoutDialog } = this.state
        return (
            <div className='nav-container'>
                <div className='nav-home'>
                    <Link className='item' exact to="/">
                        <img className='home' src={process.env.PUBLIC_URL + '/img/home.png'} alt='home' />
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link className='item' to={{
                        pathname: "/board",
                        state: { test: 'hi' }
                    }}>
                        <img className='board' src={process.env.PUBLIC_URL + '/img/board.png'} alt='board' />
                    </Link>
                    {this.renderNav()}
                </div>
                <hr />
                <Logout
                    open={isOpenLogoutDialog}
                    handleDialog={this.handleLogoutDialog}
                />
            </div>
        )
    }
}

export default Nav