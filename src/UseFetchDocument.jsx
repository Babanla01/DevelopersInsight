import { useState, useEffect } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const useFetchDocument = (collectionName, docId) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!docId) return;

    const docRef = doc(db, collectionName, docId);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setData({ id: docSnap.id, ...docSnap.data() });
        } else {
          throw new Error("Document does not exist");
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching document:", err.message);
        setError(err.message);
        setIsPending(false);
      });
  }, [collectionName, docId]);

  return { data, isPending, error };
};

export default useFetchDocument;
