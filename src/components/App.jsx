import React from "react";
import Header from "./header.jsx";
import Note from "./note.jsx";
import Footer from "./footer.jsx";
import notes from "../notes.js"




function App(){
    return <div>
    <Header />

    {notes.map(entryNote => <Note 
    
                 key={entryNote.key}
                title={entryNote.title}
                content={entryNote.content}
    />)}
 
    <Footer />
    </div>
}



export default App;