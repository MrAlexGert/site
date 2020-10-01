import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getAuthThunkCreator } from '../../redux/auth_reduser'


//container component for Header
class HeaderContainer extends React.Component {
    
    componentDidMount = () => {// calling after updates 
        this.props.getAuthThunkCreator()
        
    }

    render() {

        return (

            <Header
                id={this.props.id}
                email={this.props.email}
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
        )
    }
}

// extraction data in redux_store.js  
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        email: state.authReduser.email,
        id: state.authReduser.id,
        login: state.authReduser.login,
        isAuth: state.authReduser.isAuth,
    }
}



export default connect(mapStateToProps, {
    getAuthThunkCreator, // extraction function in redax_store.js
})(HeaderContainer)
