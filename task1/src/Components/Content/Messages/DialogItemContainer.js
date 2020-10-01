import React from 'react'
import { connect } from 'react-redux'
import DialogItem from './DialogItem'
import withAuthRedirect from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

// export default MessagesItem;
const mapStateToProps = (state) => {
    return {
        dialogItem: state.dialogReduser.users,
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect,
)(DialogItem)