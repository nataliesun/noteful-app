import React, { Component } from 'react';
import moment from 'moment'
import { NavLink } from 'react-router-dom'

class Note extends Component {
    render() {
        const time = moment(this.props.modified).format('MMM Do YY')
        return (
            <div className="Note">
            <NavLink to={`/note/${this.props.id}`} >
                <h2>
                    {this.props.name}
                </h2>
            </NavLink>
                <p>Date modified: {time} </p>
                <button type="button">Delete note</button>
            </div>
        );
    }
}

export default Note;