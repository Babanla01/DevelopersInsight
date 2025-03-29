import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetchDocument from "./UseFetchDocument";


const BlogDetails = () => {
    const history = useHistory()
    const {id} = useParams();
    const { data:blog , isPending , error} = useFetchDocument("users",id)
    // const { data:blogs , isPending , error} = useFetch("Blogs")
    // const blog = blogs.find((blog) => blog.id === id)

    console.log(blog);
    const handleDelete = ()=>{
        fetch(`Blogs/${id}`,{
            method:"DELETE"
        }).then(() => history.push('/') )
    }
    
    return ( 
        <div>
            {isPending && <div> Loading ....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="blog-details">
                    <p className="title">{blog.title}</p>
                    <p className="author"> Written by {blog.author}</p>
                    <p className="body">{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;