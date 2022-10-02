// Schema & methods for 'blogs' collection

// Firebase imports
import firebase from "firebase/app";
import { db } from "../../setup";

class Blog {
  static collectionName = "blogs";

  /**
   * Creates a document in the 'blogs' collection
   * @param {string} title Title of the Blog
   * @param {string} shortDesc Short description of the Blog to be visible in blog cards
   * @param {string} authorID Member ID of the author
   * @param {boolean} isVisible Is the blog visible?
   * @param {string[]} tags List of tags associated with the blog
   * @param {string} content Actual content of the blog
   * @param {string[]} assets List of asset links associated to the blog
   * @returns boolean: Is the document created?
   */
  createBlog(title, shortDesc, authorID, isVisible, tags, content, assets) {
    let blogData = {
      title: title,
      shortDesc: shortDesc,
      author: authorID,
      isVisible: false,
      publishedOn: firebase.firestore.FieldValue.serverTimestamp,
      tags: tags,
      content: content,
      assets: assets,
    };
    db.collection(Blog.collectionName)
      .add(blogData)
      .then((doc) => doc.id !== null)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error in createBlog in blog.js");
        console.error(errorCode);
        console.error(errorMessage);
        return false;
      });
  }
}
