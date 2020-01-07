import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea.jsx";

// The App
function App(){

    {/* Array of notes */}
    const [notes, setNotes] = React.useState([]);

    {/* Function that pushes a new note into the array */}
    function addNote(newNote){

        setNotes(previousNotes =>{
            return [...previousNotes, newNote];
        });
    }

    {/* Function that removes a note from the array */}
    function deleteNote(id){

        setNotes(previousNotes =>{

            {/* Filters out by id/index */}
            return previousNotes.filter((note, index) =>{
                return index !== id;
            });
        });
    }

    {/* Function that returns a Note to be rendered */}
    function renderNotes(noteToRender, index){
        return (
            <Note 
                key = {index}
                id = {index}
                title = {noteToRender.title}
                content = {noteToRender.content}
                delete = {deleteNote}
            />
        );
    }

    return (

        <div>
            <Header />

            <CreateArea submit = {addNote}/>

                {notes.map(renderNotes)}

            <Footer />
        </div>
    
    );
}


export default App;