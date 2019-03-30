import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar'
import Note from '../Note/Note'

class NotePage extends Component {

    render() {
        const singleNote = this.props.data.notes.find(
            note => note.id === this.props.rProps)
            
        return (
            <div>
                <SideBar />
                <Note {...singleNote} />
                <p>{singleNote.content}</p>
            </div>
        );
    }
}

export default NotePage;