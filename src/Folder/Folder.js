import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Folder extends Component {
    render() {
        return (
            <Link to='/folder'>
                <div className="Folder">
                    {this.props.name}
                </div>
            </Link>
        );
    }
}

export default Folder;