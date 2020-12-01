import React from 'react'
import {useState} from 'react'

//editor
import EditorPlugin from "./EditorPlugin.js"


//CSS
import "./CSS/writePost.css"

function WritePost() {

    //to be fetched from db
    const categories=["Computer Science","Robotics","General"];

    const [title,setTitle]=useState("");
    const [category,setCategory]=useState(categories[0]);

    function handleSubmit(event){
        event.preventDefault();

        // save this to firebase
        console.log(title);
        console.log(category);
        setTitle("")
    }

    return(
        <div className="blogPostPage">
        <form onSubmit={handleSubmit}>
            <div className="blogPostPage__title">
                <div className="ui fluid icon input">
                    <select class="ui compact selection dropdown" onChange={(event)=>setCategory(event.target.value)}>
                        {
                            categories.map((category)=><option value={category}>{category}</option>)
                        }
                    </select>
                    <input type="text" placeholder="Title for Blog Post" onChange={(event)=>setTitle(event.target.value)} required/>
                </div>
            </div>
            <div className="blogPostPage__editor">
                <EditorPlugin/> 
            </div>
            <div className="blogPostPage__submit">
                <button type="submit" class="ui inverted button">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default WritePost
