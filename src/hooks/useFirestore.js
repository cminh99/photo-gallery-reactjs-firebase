import { useState, useEffect } from 'react';
import { appFirestore } from '../firebase/config';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = appFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((document) => {
          documents.push({ ...document.data(), id: document.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
}

export default useFirestore;
