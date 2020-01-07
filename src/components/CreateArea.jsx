import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

//creating notes

function CreateArea(props) {

    {/* For one note */}
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    {/* Function to change/update the note's values as the user types */}
    function changeNote(event){
        const {name, value} = event.target;

        {/* Keeps previous, only updates the corresponding name */}
        setNote(previousNote =>{
            return {
                ...previousNote,
                [name] : value
            };
        });
    }

    {/* Function that passes the completed note to App.jsx for rendering */}
    function submitNote(event){

        {/* Prevents page refresh */}
        event.preventDefault();

        {/* Do nothing if note is empty */}
        if (note.content === "" && note.title === ""){
            return;
        }

        {/* Pass up the component tree */}
        props.submit(note);

        {/* Reset input boxes */}
        setNote({
            title: "",
            content: ""
        });

    }

    {/* To toggle form expansion */}
    const [isExpanded, setExpanded] = React.useState(false);

    {/* Function to expand the form */}
    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className = "create-post">

            {isExpanded ?
                <input 
                    onChange = {changeNote} 
                    value = {note.title} 
                    name = "title" 
                    placeholder = "Title" /> : null}
            
                <textarea 
                    onChange = {changeNote}
                    onClick = {expand} 
                    value = {note.content} 
                    name = "content" 
                    placeholder = "Take a note..." 
                    rows = {isExpanded ? 3 : 1} />

                <Zoom in = {isExpanded}>
                    <Fab onClick = {submitNote}><AddIcon /></Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;
