import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

// Note

function Note(props){


    return (

        <div className = "note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            
            {/* Function that passes the id of the note up to be deleted in App.jsx */}
            <button onClick = {() =>props.delete(props.id)}><DeleteIcon/></button>
        </div>

    );
}

export default Note;