import React from 'react'
import Navbar from './Navbar' 
import Home from '../pages/Home'

function Layout(props) {
  return (
    <React.Fragment>
      {/* <Navbar />  */}
      {props.children}
    </React.Fragment>
  )
}

export default Layout