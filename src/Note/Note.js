import React, { Component } from 'react';
import moment from 'moment'

class Note extends Component {
    render() {
        const time = moment(this.props.modified).format('MMM Do YY')
        return (
            <div className="Note">
                <h2>
                    {this.props.name}
                </h2>
                <p>Date modified: {time} </p>
                <button type="button">Delete note</button>
            </div>
        );
    }
}

export default Note;