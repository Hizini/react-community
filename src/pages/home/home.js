
import React, { Component } from 'react'
import './home.scss'
import Nav from '../../nav/nav'

class Home extends Component {

  render() {
    return (
      <>
      <Nav/>
      <div className='home-container'>
        <div className='card'>
          <div className='card-title'>Hello!</div>
          <div className='img'>
            <img className='one' src='img/home.png' alt='1'/>
          </div>
          <div className='img'>
            <img className='two' src='img/home.png' alt='2'/>
          </div>
          <div className='img'>
            <img className='three' src='img/home.png' alt='3'/>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home