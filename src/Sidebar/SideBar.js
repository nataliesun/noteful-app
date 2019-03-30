import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import './SideBar.css'

class SideBar extends Component {
    static defaultProps = {
        folders: []
    }

    render() {

        const folders = this.props.folders.map(folder => <Folder key={folder.id} name={folder.name} folderId={folder.id} />)
        
        return (
            <div className="SideBar">
                SideBar
                {folders}
                <button type="button">Add folder</button>
            </div>
        );
    }
}

export default SideBar;