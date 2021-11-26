
import React, { Component } from 'react'
import './information.scss';
// import Email from './Email/email';
// import Birth from './Birth/birth';
import Gender from './Gender/gender';

class Information extends Component {
    render() {
        const { name, id, password, checkPassword, emailHead, emailTail, selectEmail, year, month, day, isGender, handleClickGender, onInputDataHandler, onSelectEmail} = this.props
        return (
            <div className='information-container'>
                <div className="join_info">
                    <h2>회원정보 입력</h2>
                    <div className="join_input">
                        <input className="name" type="text" onChange={onInputDataHandler} name='name' value={name} placeholder="닉네임"></input>
                        <input className="id" type="text" onChange={onInputDataHandler} name='id' value={id} placeholder="아이디"></input>
                        <input className="password" type="password" onChange={onInputDataHandler} name='password' value={password} placeholder="비밀번호"></input>
                        <input className="checkPassword" type="password" onChange={onInputDataHandler} name='checkPassword' value={checkPassword} placeholder="비밀번호 확인"></input>
                        <div className="notMatchPassword">
                            {password.length < 1 || checkPassword.length < 1 ? '' : (password === checkPassword ? <div className="match">일치</div> : '비밀번호가 일치하지 않습니다.')}
                        </div>
                        <div className="email-container">
                            <input className="emailHead" type='text' onChange={onInputDataHandler} name='emailHead' value={emailHead} placeholder="이메일"></input>
                            <span>@</span>
                            <input className="emailTail" onChange={onInputDataHandler} name='emailTail' value={emailTail} type='text'></input>
                            <select className="selectEmail" onChange={onSelectEmail} name='selectEmail' value={selectEmail}>
                                <option value="">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.com">daum.com</option>
                                <option value="nate.com">nate.com</option>
                            </select>
                        </div>
                        <div className="birth-container">
                            <input className="year" type="text" onChange={onInputDataHandler} name='year' value={year} placeholder="생년 (yyyy)" maxLength="4" ></input>
                            <input className="month" type="text" onChange={onInputDataHandler} name='month' value={month} placeholder="월 (mm)" maxLength="2" ></input>
                            <input className="day" type="text" onChange={onInputDataHandler} name='day' value={day} placeholder="일 (dd)" maxLength="2" ></input>
                        </div>
                        <Gender 
                            isGender={isGender}
                            selectGender={handleClickGender}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Information