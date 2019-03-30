import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Folder from '../Folder/Folder';
import './SideBar.css'

class SideBar extends Component {
    static defaultProps = {
        folders: [],
        folderName: ''
    }

    render() {

        const folders = this.props.folders.map(folder => <Folder key={folder.id} name={folder.name} folderId={folder.id} />)
        
        return (
            <div className="SideBar">
                SideBar
                {folders}
                {!!folders.length && <button type="button">Add folder</button>}
                {!folders.length && <button type="button" onClick={this.props.history.goBack}>Go back</button>}
                {!!this.props.folderName && <div>{this.props.folderName}</div>}
            </div>
        );
    }
}

export default withRouter(SideBar);