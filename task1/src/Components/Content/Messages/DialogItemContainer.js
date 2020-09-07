import React from 'react'
import { connect } from 'react-redux'
import DialogItem from './DialogItem'




// export default MessagesItem;

const mapStateToProps = (state) => {
    console.log(state)
    return {
        dialogItem: state.dialogReduser.users
    }
}
const mapdispatchToProps = (dispatch) => {
    return {}
}


const DialogItemContainer = connect(mapStateToProps, mapdispatchToProps)(DialogItem)

export default DialogItemContainer