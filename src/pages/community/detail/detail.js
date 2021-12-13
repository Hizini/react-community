
import React, { Component } from 'react'
import './detail.scss'
import Nav from '../../../nav/nav';
import axios from "axios";
import Comment from '../detail/Comment/comment'

class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            currentUserId: '',
            pathnameId:'',
            isDeleted:'',
        }
    }

    componentDidMount() {
        const pathname = this.props.location.pathname
        const _id = pathname.split('/')[2]

        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }
        if (token) {
            axios.get(`http://localhost:2008/api/board/${_id}`, config)
                .then(response => {
                    this.setState({
                        title: response.data.title,
                        body: response.data.body,
                        pathnameId: _id
                    })
                    // console.log(this.state.pathnameId)
                })
                .catch(error => {
                    if (error.response.status === 400) {
                        alert('400 Error')
                    }
                })
            axios.get('http://localhost:2008/api/user/mypage', config)
                .then(response => {
                    this.setState({
                        currentUserId: response.data._id,
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            alert('로그인이 필요한 서비스입니다.')
            this.props.history.push('/signIn')
        }
    }


    onClickListButton = () => {
        this.props.history.push('/board')
    }

    handleClickeEditButton = () => {
        const { history } = this.props
        const { title, body, pathnameId } = this.state
        history.push({
            pathname: '/board/edit',
            state: { title: title, content: body, pathnameId: pathnameId }
        })
    }

    handleClickeDeleteButton = () => {
        const pathname = this.props.location.pathname
        const _id = pathname.split('/')[2]

        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }

        alert ('게시글이 삭제되었습니다.')

        if (token) {
            axios.delete(`http://localhost:2008/api/board/${_id}`, config)
            .then(() => this.props.history.push('/board'))
        }
    }

    render() {
        const { title, body, currentUserId } = this.state
        const { author } = this.props.location.state
        // console.log(author, this.state.author)
        return (
            <>
                <Nav />
                <div className='community-detail-container'>
                    <div className='communtiy-edit-area'>
                        <div className={`community-edit-button ${author === currentUserId ? '' : 'active'}`} onClick={this.handleClickeEditButton}>게시글 수정</div>
                        <div className={`community-delete-button ${author === currentUserId ? '' : 'active'}`} onClick={this.handleClickeDeleteButton}>게시글 삭제</div>
                    </div>
                    <div className='detail-total'>
                        <h1 className='community-title'>게시글</h1>
                        <div className='detail-title'>
                            <p className='title'>제목 : {title}</p>
                        </div>
                        <hr />
                        <div className='datail-body'>
                            <p className='d-body'>내용 : {body}</p>
                        </div>
                        <hr />
                        <Comment />
                    </div>
                    <div className='list-button' onClick={this.onClickListButton}>목록</div>
                </div>
            </>
        )
    }
}

export default Detail