import React, { Component } from 'react'
import './input.scss';

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            nickname: '',
            checked: false,
        }
    }

    componentDidUpdate(prvProps, prvState) {
        const { commentName } = this.props
        if (prvProps.commentName !== commentName) {
            this.setState({
                nickname: commentName
            })
        }
    }

    onInputValueHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onInputNicknameHandler = (e) => {
        this.setState({
            nickname: e.target.value
        })

    }

    onButtonHandler = () => {
        const { inputData } = this.props
        if (this.state.value === '') {
            alert("댓글을 입력해주세요!")
        }
        if (this.state.nickname === '') {
            alert("닉네임을 입력해주세요!")
        }
        if (this.state.value && this.state.nickname !== '') {
            inputData(this.state.value, this.state.nickname, this.state.checked)
        }
    }

    onCheckedHandler = () => {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {
        const token = localStorage.getItem('token')
        return (
            <>
                <div className="">
                    <input className="commentArea" onChange={this.onInputValueHandler} type='text' value={this.state.value} placeholder='댓글'></input>
                    <input className="nickname" onChange={!token && this.onInputNicknameHandler} type='text' value={this.state.nickname} placeholder='닉네임'></input>
                    <button className="input" onClick={this.onButtonHandler}>입력</button>
                    <div className='Anonymous'>익명
                        <input className="AnonymousCheck" onChange={this.onCheckedHandler} type='checkbox' value={this.state.checked}></input>
                    </div>
                </div>
            </>
        )
    }
}

export default Input