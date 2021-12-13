
import React, { Component } from 'react'
import './comment.scss';

import Input from './Input/input';
import List from './List/list';
import axios from "axios";

class Comment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentData: [],
            commentName: '',
        }
    }

    componentDidMount() {
        this.getCommentData()
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }
        if(token) {
            axios.get('http://localhost:2008/api/user/nickname', config)
            .then(response => {
                this.setState({
                    commentName: response.data.nickname
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    inputData = (commentValue, nickname, checked) => {
        const body = { nickname: checked ? '익명' : nickname, commentValue }
        axios.post('http://localhost:2008/api/comment', body)
            .then(this.getCommentData())
            .catch(error => {
                console.log(error)
                alert('Unknow Error!!')
            })
    }


    getCommentData = () => {
        // const token = localStorage.getItem('token')
        // const config = { headers: { Authorization: `Bearer ${token}` } }

        axios.get('http://localhost:2008/api/comment')
            .then(response => {
                this.setState({
                    commentData: response.data.list
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <>
                <div className="comment-container">
                    <div className="Comment">
                        <div className="List">
                            <List listData={this.state.commentData} />
                            <Input inputData={this.inputData} commentName={this.state.commentName}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Comment