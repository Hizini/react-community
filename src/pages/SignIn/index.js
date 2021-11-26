import React, { Component } from 'react'
import './index.scss'
import Login from './Login/login'
import axios from "axios";
import Nav from '../../nav/nav'

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginId: '',
            loginPassword: '',

        }
    }

    onInputLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClickLoginBtn = async () => {
        const { loginId, loginPassword } = this.state
        const body = {
            id: loginId,
            password: loginPassword,
        }

        try {
            const response = await axios.post('http://localhost:2008/api/auth/sign-in', body)
            const token = response.data.token
            localStorage.setItem('token', token)
            this.props.history.push('/')
        } catch (error) {
            if (error.response.status === 404) {
                alert('Error ! Not Found')
            }
            else if (error.response.status === 500) {
                alert('Server Error')
            }
            else {
                alert('Unknown Error...')
            }
        }
    }

    onClickJoinBtn = () => {
        this.props.history.push('/Join')
    }


    render() {
        const { loginId, loginPassword } = this.state
        return (
            <>
            <Nav/>
            <div className='signIn-container'>
                <div className='title-container'>
                    <div className="title">로그인</div>
                </div>
                <Login
                    loginId={loginId}
                    loginPassword={loginPassword}
                    onInputLogin={this.onInputLogin} />
                <div className='finishButton'>
                    <button className="loginBtn" onClick={this.onClickLoginBtn}>로그인</button>
                    <button className='joinBtn' onClick={this.onClickJoinBtn}>회원가입</button>
                </div>
            </div>
            </>
        )
    }
}

export default SignIn