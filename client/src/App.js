import './styles.scss';
import React from 'react';
import axios from 'axios';

function App() {
  const [avatar, setAvatar] = React.useState(null);
  const [file, setFile] = React.useState(null);

  const sendFile = React.useCallback(async () => {
    try {
      const image = new FormData();
      image.append('avatar', file);

      await axios
        .post('api/upload', image, {
          headers: {
            'content-type': 'mulpipart/form-data',
          },
        })
        .then((res) => setAvatar(res.data.path));
    } catch (error) {
      console.log(error);
    }
  }, [file]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='image'>
          {avatar ? (
            <img src={`${avatar}`} alt='' />
          ) : (
            <img
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'
              alt=''
            />
          )}
        </div>
        <div className='buttons'>
          <input
            type='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={sendFile}>Upload image</button>
        </div>
      </div>
    </div>
  );
}

export default App;
