import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
const Create = () => {
    const history = useHistory();
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');

    const handlePost = (e)=>{
        e.preventDefault()
        const data = {title, body , author};
        console.log(data);
        
        // fetch("http://localhost:3000/blogs" , {
        //     method: "POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(data)
        // }).then(()=> history.push("/"))
        // const docRef =  addDoc(collection(db, "users"), {
        //     name: "John Doe",
        //     age: 25,
        //     email: "john@example.com"
        //   });
        //   console.log("Document written with ID:", docRef.id);
        // } catch (e) {
        //   console.error("Error adding document:", e);
        // }
        addDoc(collection(db, "users"), data)
            .then((docRef) => {
              console.log("Document written with ID:", docRef.id);
            })
            .catch((error) => {
              console.error("Error adding document:", error);
            }).finally(()=>{
                history.push("/")
            })
    }
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handlePost}>
                <div className="input-group">
                    <label> Blog Title:</label>
                    <input type="text"
                       name="title"
                       required
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label> Blog Author:</label>
                    <input type="text"
                       name="title"
                       required
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label> Blog Body:</label>
                    <textarea
                       name="body"
                       rows={5}
                       required
                       value={body}
                       onChange={(e)=> setBody(e.target.value)} 
                    ></textarea>
                </div>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;