import { useState, useEffect } from 'react';
import { appStorage, appFirestore, timestamp } from '../firebase/config';

function useStorage(photo) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = appStorage.ref(photo.name);
    const collectionRef = appFirestore.collection('pictures');

    storageRef.put(photo).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => setError(err),
      async () => {
        let name = photo.name;
        let url = await storageRef.getDownloadURL();
        let createdAt = timestamp();

        collectionRef.add({ name, url, createdAt });
        setUrl(url);
      }
    );
  }, [photo]);

  return { progress, error, url };
}

export default useStorage;
