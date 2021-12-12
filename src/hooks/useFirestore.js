import { useState, useEffect } from "react";
import {
  projectFirestore,
  query,
  orderBy,
  collection,
  onSnapshot,
} from "../firebase/config";

const useFirestore = (collecationName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = query(
      collection(projectFirestore, collecationName),
      orderBy("createdAt", "desc"),
    );
    onSnapshot(unsub, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collecationName]);

  return { docs };
};

export default useFirestore;
