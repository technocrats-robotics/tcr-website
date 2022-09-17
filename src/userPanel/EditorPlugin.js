/* eslint-disable no-multi-str */
import React from "react";
// import { useState } from "react";

//editor
import { Editor } from "@tinymce/tinymce-react";

function EditorPlugin() {
  // const [postContent, setPostContent] = useState("");

  function handleChange(content) {
    console.log(content);
  }

  return (
    <div>
      <Editor
        apiKey="xes65ohsmty1x6hgjbso8e9hp2jkodtxh4pxi3ewqq6gyxyc"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline | \
                         alignleft aligncenter alignright | \
                         bullist numlist outdent indent",
        }}
        onEditorChange={handleChange}
      />
    </div>
  );
}

export default EditorPlugin;
