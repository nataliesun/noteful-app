import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar'
import NoteList from '../NoteList/NoteList'

class FolderPage extends Component {
    render() {
      
        const matchingNotes = this.props.data.notes.filter(note => {
            return note.folderId === this.props.rProps      })

        return (
            <div className="FolderPage">
                <SideBar folders={this.props.data.folders}/>
                <NoteList notes={matchingNotes}/>
            </div>
        );
    }
}

export default FolderPage;