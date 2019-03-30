import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';
import NoteList from '../NoteList/NoteList';

class MainPage extends Component {
    render() {
        const { notes, folders } = this.props.data;
        console.log(this.props)
        return (
            <div className="MainPage">
                <SideBar folders={folders} />
                <NoteList notes={notes} />
            </div>
        );
    }
}

export default MainPage;