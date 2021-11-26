
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

                console.log(this.state.communtiyList, this.state._id)
                console.log(response.data[0]._id)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onClickCommunityList = () => {
        const token = localStorage.getItem('token')
        const config = { headers: { Authorization: `Bearer ${token}` } }
        if(token) {
            axios.post('http://localhost:2008/api/board/:id', config)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert ('400 Error')
                }
            })

        }
    }

    renderCommuntiyList = () => {
        const { communtiyList, _id } = this.state
        // let communtiyLists = communtiyList.reverse()
        return communtiyList.map(item => {
            // this.setState ({
            //     _id: item._id
            // })
            console.log(item._id)
            return (
                <div className='community-list-data'>
                    <span className='list' value={item._id}> {item.title}</span>
                    <span className='writer'>{item.nickname}</span>
                    <span className='date'>{item.createdAt}</span>
                </div>
            )
        })
    }

    render() {
        const { _id } = this.state
        return (
            <>
                <Nav />
                <div className='community-container'>
                    <Link to='/board/edit' style={{ textDecoration: 'none' }}>
                        <div className='community-write-button'>게시글 작성</div>
                    </Link>
                    <div className='community-list'>
                        <div className='community-list-header'>
                            <span className='list'>게시글 목록</span>
                            <span className='writer'>작성자</span>
                            <span className='date'>작성일</span>
                        </div>
                        <Link to={`/board/${_id}`} style={{ textDecoration: 'none', color: 'black'}}>
                            <div className='community-list-body' onClick={this.onClickCommunityList}>
                                {this.renderCommuntiyList()}
                            </div>
                        </Link>

                    </div>
                </div>
            </>
        )
    }
}

export default Community