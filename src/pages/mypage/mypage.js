import React, { Component } from 'react'
import './mypage.scss';
import Nav from '../../nav/nav';
import axios from "axios";


class Mypage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myCommentData: ['a', 'b', 'c', 'd', 'e'],
            nickname: '',
            id: '',
            birth: '',
            email: '',
            gender: '',
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }
        if (token) {
            axios.get('http://localhost:2008/api/user/mypage', config)
                .then(response => {
                    this.setState ({
                        nickname: response.data.name,
                        id: response.data.id,
                        birth: response.data.birth,
                        email: response.data.email,
                        gender: response.data.gender,
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    handleMypageData = () => {

    }

    handleMyCommentData = () => {
        const { myCommentData } = this.state
        return myCommentData.map(item => {
            return <div className='comment-each-data'> {item} </div>
        })
    }

    render() {
        const { nickname, id, birth, email, gender } = this.state
        return (
            <>
                <Nav />
                <div className='mypage-container'>
                    <div className='profile'>
                        <div className='profile-img'>
                            <img className='img' src='img/profileImg.png' alt='profile-img' />
                        </div>
                        <div className='profile-info'>
                            <div className='info-text1'>{nickname} ({id})</div>
                            <div className='info-text2'>생일 : {birth}<br/>성별 : {gender}<br/> 이메일 : {email}</div>
                        </div>
                    </div>
                    <div className='comment'>
                        <div className='comment-list'>작성댓글</div>
                        <div className='comment-data'>{this.handleMyCommentData()}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Mypage