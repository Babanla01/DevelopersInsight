import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {data:blogs , isPending , error ,setData:setBlogs} = useFetch("http://localhost:3000/blogs")

// const [blogs, setBlogs] = useState(null);
// const [name,setName] = useState("Sirkay")
// const [isPending, setIsPending] = useState(true)
// const[error, setError] = useState(null)
const changeName = () => {
    setName("Babanla")
}
const handleDelete = (id) =>{
  const newBlog = blogs.filter((blog)=> blog.id !== id )
  setBlogs(newBlog)
}
// useEffect(()=>{
//     fetch("http://localhost:3000/blogs")
//     .then((res) => {
//         if(!res.ok){

//          throw new Error("Cant get data from this resourse");
            
//         }
//       return  res.json()})
//     .then((data)=>{
//         console.log(data);
//         setBlogs(data)
//         setIsPending(false)
        
//     }).catch((err)=> {
//         console.log(err.message)
//         setError(err.message)
//         setIsPending(false)
// })
// },[])


    return (
        <div className="home">
            {error && <div>{error}</div>}{}
            {isPending && <div> Loading .........</div>}
            {blogs &&<BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />}
            {/* {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === "yoshi")} title="Yoshi's Blogs !" handleDelete={handleDelete} />} */}
        </div>
    );
    }
    

export default Home;
