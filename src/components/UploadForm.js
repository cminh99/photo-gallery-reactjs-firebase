import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleChange = (e) => {
    let photoToUpload = e.target.files[0];

    if (photoToUpload && types.includes(photoToUpload.type)) {
      setPhoto(photoToUpload);
      setError(null);
    } else {
      setPhoto(null);
      setError('Please select an image file (png or jpeg)!');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {photo && <div>{photo.name}</div>}
        {photo && <ProgressBar photo={photo} setPhoto={setPhoto} />}
      </div>
    </form>
  );
}

export default UploadForm;
