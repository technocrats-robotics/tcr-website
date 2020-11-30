import React from 'react'
import {useState} from 'react'

//editor
import EditorPlugin from "./EditorPlugin.js"


//CSS
import "./CSS/writePost.css"

function WritePost() {

    const [title,setTitle]=useState("");

    return(
        <div className="blogPostPage">
            <div className="blogPostPage__editor">
                <EditorPlugin/> 
            </div>
            
        </div>
    )
}

export default WritePost
