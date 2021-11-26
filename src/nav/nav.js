import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.scss';


class Nav extends Component {

    render() {
        const token = localStorage.getItem('token')

        return (
            <div className='nav-container'>
                <div className='nav-home'>
                    <Link className='item' exact to="/">
                        <img className='home' src='img/home.png' alt='home' />
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link className='item' to="/board">
                        <img className='board' src='img/board.png' alt='board' />
                    </Link>
                    {token
                        ?
                        <Link className='item' to="/mypage">
                            <img className='mypage' src='img/mypage.png' alt='mypage' />
                        </Link>
                        :
                        <>
                            <Link className='item' to="/signIn">
                                <img className='login' src='img/login.png' alt='login' />
                            </Link>
                            <Link className='item' to="/join">
                                <img className='join' src='img/join.png' alt='join' />
                            </Link>
                        </>
                    }

                </div>
                <hr />
            </div>
        )
    }
}

export default Nav