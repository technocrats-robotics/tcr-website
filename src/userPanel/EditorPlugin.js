import React from 'react'
import {useState} from 'react'

//editor
import { Editor } from '@tinymce/tinymce-react';

function EditorPlugin() {

    const[postContent,setPostContent]=useState("");

    function handleChange(event){
        console.log(event.target.getContent());
    }


    return (
        <div>
            <Editor
                apiKey="xes65ohsmty1x6hgjbso8e9hp2jkodtxh4pxi3ewqq6gyxyc"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                         alignleft aligncenter alignright | \
                         bullist numlist outdent indent | help'
                }}
                onChange={{handleChange}}
            />
        </div>
    )
}

export default EditorPlugin
