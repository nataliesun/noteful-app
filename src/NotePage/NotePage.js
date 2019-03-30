import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar'
import Note from '../Note/Note'

class NotePage extends Component {

    render() {
        const singleNote = this.props.data.notes.find(
            note => note.id === this.props.rProps)
            
        const folderName = this.props.data.folders.find(folder => folder.id === singleNote.folderId).name

        console.log(folderName)
        return (
            <div>
                <SideBar folderName={folderName}/>
                <Note {...singleNote} />
                <p>{singleNote.content}</p>
            </div>
        );
    }
}

export default NotePage;