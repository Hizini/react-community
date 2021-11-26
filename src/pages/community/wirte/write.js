
import React, { Component } from 'react'
import './write.scss'
import Nav from '../../../nav/nav';
import axios from "axios";

class Write extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    // componentDidMount() {

    // }

    onClickFinishButton = () => {
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const { title, content } = this.state
        const body = {
            title: title,
            body: content
        }
        if(token) {
            axios.post('http://localhost:2008/api/board', body, config)
            .then(response => {
                console.log(response)
                alert("등록 완료!")
                this.props.history.push ('/board')
            })
            .catch(error => {  
                console.log(error)
            })
        }
    }

    onInputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        const { title, content } = this.state
        console.log(title, content)
        return (
            <>
                <Nav />
                <div className='community-write-container'>
                    <h1>게시글 쓰기</h1>
                    <div className='input-area'>
                        <input className='community-write-title' onChange={this.onInputHandler} name='title' value={title} type='text' placeholder='게시글 제목'></input>
                    </div>
                    <div className='input-area'>
                        <input className='community-write-body' onChange={this.onInputHandler} name='content' value={content} type='text' placeholder='게시글 내용'></input>
                    </div>
                    <div className='finish-button' onClick={this.onClickFinishButton}>작성완료</div>
                </div>
            </>
        )
    }
}

export default Write