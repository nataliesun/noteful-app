import React, { Component } from 'react';
import Note from '../Note/Note';
import './NoteList.css'

class NoteList extends Component {
    static defaultProps = {
        notes: []
    }
    
    render() {
        const notes = this.props.notes.map(note => <Note key={note.id} {...note} />)
        return (
            <div className="NoteList">
                NoteList
                {notes}
                <button type="button">Add note</button>
            </div>
        );
    }
}

export default NoteList;