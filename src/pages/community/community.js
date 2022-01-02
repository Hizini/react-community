
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
            _id: [],
            currentPage: 0,
            itemPerPage: 15,
            totalItem: '',
        }
    }

    componentDidMount() {
        this.getCommunity()
        window.addEventListener('scroll', this.onBodyScroll)
    }

    onBodyScroll = e => {
        const { document: { body: { scrollHeight } }, innerHeight, scrollY } = window
        this.scroll = scrollY
        const pageIndex = this.state.currentPage

        if (innerHeight + scrollY > scrollHeight) {
          this.getCommunity()
          this.setState({
            currentPage: pageIndex + 1,
            })
        }

    }

    renderCommuntiyList = () => {
        const { communtiyList } = this.state
        // let communtiyLists = communtiyList.reverse()
        return communtiyList && communtiyList.map(item => {
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

    renderPage = () => {
        const { totalItem, itemPerPage, currentPage } = this.state
        const pageLength = Math.ceil(totalItem / itemPerPage)
        const pageNumbers = []
        for (let i = 0; i < pageLength; i++) {
            pageNumbers.push(i)
        }
        // console.log(pageNumbers)
        return pageNumbers.map(item => {
            return (
                <span className={`community-page ${(item === currentPage ? 'active' : '')}`} onClick={()=>this.handlePageNumberClicked(item)}>{item+1}</span>
            )
        })
    }

    getCommunity = () => {
        const { currentPage, itemPerPage, totalItem, communtiyList } = this.state
        // console.log(totalItem, communtiyList)
        console.log(currentPage)
        axios.get(`http://localhost:2008/api/board?offset=${currentPage}&limit=${itemPerPage}`)
            .then(response => {
                this.setState({
                    communtiyList: response.data.list,
                    totalItem: response.data.count
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClickeEditButton = () => {
        const { history } = this.props
        history.push('/board/edit')
    }

    handlePageNumberClicked = newPage => {
        this.setState({ currentPage: newPage }, () => this.getCommunity())
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
                        <div className='community-page-area'>
                            {/* {this.renderPage()} */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Community