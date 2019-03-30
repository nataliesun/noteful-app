import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Folder extends Component {
    render() {
        return (
            <NavLink activeClassName="active-folder" to={`/folder/${this.props.folderId}`}>
                <div className="Folder">
                    {this.props.name}
                </div>
            </NavLink>
        );
    }
}

export default Folder;