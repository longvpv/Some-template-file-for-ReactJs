import React, { Component } from 'react'
import Link from 'next/link'
import appRoutes from '../routes/appRoutes'

export default class AuthLayout extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="auth-wrapper">

          <div >
            {this.props.children}
          </div>

        </div>
        <style jsx>{`
          .auth-wrapper{
            
            min-height: 100vh;
          }
          
        `}</style>
      </React.Fragment>
    )
  }
}
