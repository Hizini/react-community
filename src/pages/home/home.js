
import React, { Component } from 'react'
import './home.scss'
import Nav from '../../nav/nav'
import Community from '../community/community'

class Home extends Component {

  render() {
    return (
      <>
      <Nav/>
      <div className='home-container'>
        <h1>Home!</h1>
      </div>
      </>
    )
  }
}

export default Home