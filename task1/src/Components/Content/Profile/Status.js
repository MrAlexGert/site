import React from 'react'
import '../Content.scss'



class Status extends React.Component {
    state = {
        text: this.props.status,
        statusElement: false
    }

    openChangeStatus = () => this.setState({ statusElement: true })
    onStatusChange = (e) => this.setState({ text: e.target.value })

    closeChangeStatus = () => {
        this.setState({ statusElement: false })
        this.props.updateStatus(this.state.text)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ text: this.props.status })
        }
    }

    render() {
        if (!this.state.statusElement) {
            return (
                <div className="status">
                    <div className="tatle-status">
                        <p onDoubleClick={this.openChangeStatus}>{this.props.status || '_______'}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="status">
                    <div className="status-block">
                        <div>
                            <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.closeChangeStatus} value={this.state.text} />
                        </div>
                        <div>
                            <button onClick={this.closeChangeStatus}>Public</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}



export default Status;
