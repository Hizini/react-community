import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Mypage from '../mypage/mypage'
import Home from '../home/home'
import SignIn from '../SignIn/index'
import Join from '../Join/join'
import Board from '../community/community'
import BoardEdit from '../community/wirte/write'
import Detail from '../community/detail/detail'

class Root extends Component {
    render() {
        return (
            <>
                <Route exact path='/' component={Home} />
                <Switch>
                    <Route exact path='/board' component={Board} />
                    <Route path='/board/edit' component={BoardEdit} />
                    <Route path='/board/:id' component={Detail} />
                </Switch>
                <Route path='/mypage' component={Mypage} />
                <Route path='/signIn' component={SignIn} />
                <Route path='/join' component={Join} />
            </>
        )
    }
}

export default Root
