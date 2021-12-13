
import React, { Component } from 'react'
import './community.scss'
import { Link } from 'react-router-dom'
import Nav from '../../nav/nav';
import axios from "axios";

class Community extends Component {

    constructor(props) {
        super(props)
        this.state = {
            communtiyList: [],
            _id: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:2008/api/board')
            .then(response => {
                this.setState({
                    communtiyList: response.data,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderCommuntiyList = () => {
        const { communtiyList } = this.state
        let communtiyLists = communtiyList.reverse()
        return communtiyLists.map(item => {
            // this.setState ({
            //     _id: item._id
            // })
            // console.log(item.isDeleted)
            return (
                !item.isDeleted ?
                    <Link to={{ pathname: `/board/${item._id}`, state: { author: item.author } }}
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='community-list-data'>
                            <span className='list'> {item.title}</span>
                            <span className='writer'>{item.nickname}</span>
                            <span className='date'>{item.createdAt}</span>
                        </div>
                    </Link>
                    :
                    <div className='community-list-data active'>게시글이 삭제되었습니다.</div>
            )
        })
    }

    handleClickeEditButton = () => {
        const { history } = this.props
        history.push('/board/edit')
    }

    render() {
        return (
            <>
                <Nav />
                <div className='community-container'>
                    {/* <Link to='/board/edit' style={{ textDecoration: 'none' }}>
                        <div className='community-write-button'>게시글 작성</div>
                    </Link> */}
                    <div className='community-write-button' onClick={this.handleClickeEditButton}>게시글 작성</div>
                    <div className='community-list'>
                        <div className='community-list-header'>
                            <span className='list'>게시글 목록</span>
                            <span className='writer'>작성자</span>
                            <span className='date'>작성일</span>
                        </div>
                        <div className='community-list-body'>
                            {this.renderCommuntiyList()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Community