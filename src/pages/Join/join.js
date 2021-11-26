
import React, { Component } from 'react'
import './join.scss';

import Information from './Information/information';
import axios from "axios";
import Nav from '../../nav/nav'

class Join extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
            password: '',
            checkPassword: '',
            passwordMessage: '',
            year: '',
            month: '',
            day: '',
            emailTail: '',
            emailHead: '',
            selectEmail: '',
            isGender: '남자',
        }
    }   

    onInputDataHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSelectEmail = (e) => {
        if (this.state.selectEmail !== '직접입력') {
            this.setState({
                selectEmail: e.target.value,
                emailTail: e.target.value
            }
            )
        }
    }

    handleTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    onClickFinishBtn = (e) => {
        const { name, id, password, checkPassword, emailTail, emailHead, year, month, day, isGender } = this.state
        if (!name) {
            alert('닉네임을 입력해주세요.')
        }
        else if (!id) {
            alert('아이디를 입력해주세요.')
        }
        else if (!password) {
            alert('비밀번호를 입력해주세요.')
        }
        else if (password !== checkPassword) {
            alert('비밀번호가 일치하지 않습니다.')
        }
        else if (!emailHead || !emailTail) {
            alert('이메일을 입력해주세요.')
        }
        else if (!year || !month || !day) {
            alert('생년월일을 입력해주세요.')
        }

        this.props.history.push('/')

        const body = {
            name,
            id,
            password,
            email: `${emailHead}@${emailTail}`,
            birth: `${year}-${month}-${day}`,
            gender: isGender,
        }

        axios.post('http://localhost:2008/api/auth/sign-up', body)
            .then(response => {
                console.log(response)
                alert ('회원가입이 완료되었습니다!')
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClickGender = value => {
        this.setState({ isGender: value })
    }


    render() {
        const { name, id, password, checkPassword, emailTail, emailHead, selectEmail, year, month, day, isGender } = this.state
        return (
            <>
                <Nav />
                <div className="join-container">
                    <div className='title-container'>
                        <div className="title">회원가입</div>
                    </div>
                    <Information
                        name={name}
                        id={id}
                        password={password}
                        checkPassword={checkPassword}
                        emailTail={emailTail}
                        emailHead={emailHead}
                        selectEmail={selectEmail}
                        year={year}
                        month={month}
                        day={day}
                        isGender={isGender}
                        handleClickGender={this.handleClickGender}
                        onInputDataHandler={this.onInputDataHandler}
                        onSelectEmail={this.onSelectEmail}
                    />
                    <button className="top" onClick={this.handleTop}> TOP ⇧ </button>
                    <div className="finishDiv">
                        <button className="finish" onClick={this.onClickFinishBtn}>가입완료</button>
                    </div>
                </div>
            </>
        )
    }
}


export default Join