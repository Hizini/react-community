import React, { Component } from 'react'
import './Logout.scss'

import { Dialog } from "@material-ui/core";

class Logout extends Component {

    render() {
        const { open, handleDialog } = this.props
        return (
            <Dialog open={open} handleDialog={handleDialog}>
                <div className='logout-dialog-container'>
                    <div className='logout-checked-area'>
                        <div className='logout-checked'>정말 로그아웃 하시겠습니까?</div>
                    </div>
                    <div className='logout-answer-area'>
                        <div className='logout-answer' onClick={() => handleDialog(false, true)}>예</div>
                        <div className='logout-answer' onClick={() => handleDialog(false)}>아니오</div>
                    </div>
                </div>
            </Dialog>

        )
    }
}

export default Logout
