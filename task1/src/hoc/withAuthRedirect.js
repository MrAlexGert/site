import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authReduser.isAuth,
    }
}

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }  

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthRedirect