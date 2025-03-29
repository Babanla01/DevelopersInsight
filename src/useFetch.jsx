// import { useState,useEffect } from "react";
// const useFetch = (url) => {
//     const [data , setData] = useState(null)
//     const [isPending , setIsPending] = useState(true)
//     const [error , setError] = useState(true)

//     useEffect(() =>{
//         const abortCont = new AbortController()
//      setTimeout(()=>{
//         fetch(url ,{signal:abortCont.signal})
//         .then((res) => {
//           if(!res.ok){
//            throw new Error("Cant load data  from this resource");
//           }
//          return res.json()})  
//         .then(data =>{
//             // console.log(data);
//             setData(data)
//             setIsPending(false)
//             setError(null)
//         }).catch((err) =>{
//             if(err.name === "AbortError"){
//                 console.log("fetch aborted");
                
//             }else{
//                 console.log(err.message);
//                 setError(err.message)
//                 setIsPending(false)

//             }
            
//         })
//      },1000)

//      return ()=>{
//         console.log("cleanup");
//         abortCont.abort()
        
//      }

//     } , [url])
//    return {data ,isPending , error , setData}
// }
 
// export default useFetch;


import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const useFetch = (collectionName) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(documents);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(err.message);
          setError(err.message);
          setIsPending(false);
        }
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      console.log("Cleanup");
      abortCont.abort();
    };
  }, [collectionName]);

  return { data, isPending, error,  setData };
};

export default useFetch;
