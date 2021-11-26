
import React, { Component } from 'react'
import './detail.scss'
import Nav from '../../../nav/nav';
import axios from "axios";

class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Nav />
                <div className='community-detail-container'>
                    <div className='detail-total'>
                        <h1 className='community-title'>게시글</h1>
                        <div className='detail-title'>
                            <p className='title'>제목 : </p>
                        </div>
                        <hr />
                        <div className='datail-body'>
                            <p className='d-body'>내용 : </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Detail