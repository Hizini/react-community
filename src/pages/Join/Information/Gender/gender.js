
import React, { Component } from 'react'
import './gender.scss';

class Gender extends Component {
    render() {
        const { isGender, selectGender } = this.props
        return (
            <div className="gender-container">
                <div className={`gender ${(isGender === '남자') ? 'active' : ''}`} onClick={e => selectGender('남자')}>남자</div>
                <div className={`gender ${(isGender === '여자') ? 'active' : ''}`} onClick={e => selectGender('여자')}>여자</div>
            </div>
        )
    }
}

export default Gender