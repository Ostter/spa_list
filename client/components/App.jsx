import React from 'react';
import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';
import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import './App.less';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        NotesActions.loadNotes();
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this)
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    }

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
    }

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Note Color Map</h2>
                <NoteEditor onNoteAdd={(e) => this.handleNoteAdd(e)} />
                <NotesGrid notes={this.state.notes} onNoteDelete={(e) => this.handleNoteDelete(e)} />
            </div>
        );
    }

    //либо привязать в конструкторе сверху, либо использовать стрелочную функцию, либо стрелочную с ES7
    _onChange() { this.setState(getStateFromFlux()); }
    //_onChange = (e) => { this.setState(getStateFromFlux()) }
    //_onChange() {(e) => this.setState(getStateFromFlux()) }

};

export default App;
