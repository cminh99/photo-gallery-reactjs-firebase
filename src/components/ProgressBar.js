import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

function ProgressBar({ photo, setPhoto }) {
  const { progress, url } = useStorage(photo);

  useEffect(() => {
    if (url) setPhoto(null);
  }, [url, setPhoto]);

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
}

export default ProgressBar;
