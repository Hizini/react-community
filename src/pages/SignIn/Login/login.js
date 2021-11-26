import React, { Component } from 'react'
import './login.scss';


class Login extends Component {

    render() {
        const { onInputLogin, loginId, loginPassword } = this.props
        return (
            <>
                <div className="login-container">
                    <div className="login_input">
                        <form>
                            <input className="loginId" type="text" name='loginId' value={loginId} onChange={onInputLogin} placeholder="아이디를 입력해주세요."></input>
                            <input className="loginPassword" type="password" name='loginPassword' value={loginPassword} onChange={onInputLogin} placeholder="비밀번호를 입력해주세요."></input>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Login