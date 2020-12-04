import React from 'react'
import {useState,useEffect,useContext} from 'react'

//getting user from context
import {GlobalUser} from "./UserPanel"

//editor
import EditorPlugin from "./EditorPlugin"


//CSS
import "./CSS/writePost.css"

//db from local firebase setup
import {db} from "../services/google-firebase/setup"

function WritePost() {
    //user's uid from context
    const user=useContext(GlobalUser);

    //User state variable for local use
    const[User,setUser]=useState(false);

    useEffect(() => {
        db.collection('members').doc(user)
        .onSnapshot(function(doc) {
        setUser(doc.data());    
    })})

    //to be fetched from database
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
        {
            (User && User.blogAccess)?(
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
            ):(
                <p>Access Denied!!</p>
            )
        }
        </div>
        
        
        
       
    )
}

export default WritePost
