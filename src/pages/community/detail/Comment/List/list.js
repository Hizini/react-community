import React, { Component } from 'react'
import './list.scss';
 

class List extends Component {

    handleListData = (e) => {
        const { listData } = this.props
        if (Array.isArray(listData)) {
            if (listData.length > 0) {
                return listData.map(item => {
                    if (item.checked) {
                        item.nickname = '익명'
                    }
                    return (
                            <div className="totalData">
                                <span className="comment">{`댓글 : ${item.commentValue}`}</span>
                                <span className="nickname">{`닉네임 : ${item.nickname}`}</span>
                                <span className="list-date">{item.date.toString()}</span>
                            </div>)
                    })
            }
        }
    }

    handleChecked = (e) => {

    }

    render() {

        return (
            <>
                <div className="displayList">
                    {this.handleListData()}
                </div>
            </>
        )
    }
}

export default List