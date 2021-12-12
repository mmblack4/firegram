import { useState, useEffect } from "react";
import {
  projectStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  projectFirestore,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = doc(collection(projectFirestore, "images"));
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let precentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(precentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => downloadURL,
        );
        const createdAt = serverTimestamp();
        await setDoc(collectionRef, { url, createdAt });
        setUrl(url);
      },
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
