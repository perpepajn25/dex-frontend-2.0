import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const withAuth = (WrappedComponent) => {
  class AuthComponent extends React.Component {
    render( ) {
      if (this.props.currentUser.id) {
        return <WrappedComponent />
      } else if (this.props.authenticating) {
        return <div className='container'> Loading... </div>
      } else {
        return <Redirect to="login" />
      }
    }
  }
  return connect(mapStateToProps)(AuthComponent)
}

const mapStateToProps = ({auth}) => {
  return {
    authenticating: auth.authenticating,
    currentUser: auth.currentUser
  }
}

export default withAuth
