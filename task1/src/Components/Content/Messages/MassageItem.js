import React from 'react'
import '../Content.scss'
import './Messages.scss'


class MassagesItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.sendText = React.createRef()
    }
    messageSend = () => this.setState({text: this.sendText.current.value})

    

    render() {
        return (
            <div>
                {this.props.usersData.map(el => {
                    return ( 
                        <div key={el.id} className="massages-item_dialog">
                            {el.massage} <br/> {this.state.text}
                        </div>
                    )
                })}
                <div>
                    <textarea ref={this.sendText}></textarea>
                    <button onClick={this.messageSend}>go</button>
                </div>
            </div>
        )
    }
}


export default MassagesItem;
