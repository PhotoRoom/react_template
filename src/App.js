import logo from './logo.svg';
import './App.css';
import AddButton from "./Components/AddButton";
import loadImage from "blueimp-load-image";
import {API_URL} from "./Constants";
import React, {useState, useEffect} from 'react';

let replaceFromFile = (file) => {

  loadImage(
    file,
    {
      maxWidth: 1200,
      canvas: true
    })
    .then((imageData) => {
      let image = imageData.image

      let imageBase64 = image.toDataURL("image/png")

      let data = {
        b64_img: imageBase64.split(',')[1],
      }
      return fetch(API_URL + '/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((result) => {
          return result.json()
        })
        .then((data) => {
          console.log('You can access the updated image here', API_URL + '/' + data.path)

        })

    })

    .catch(error => {
      console.error(error)

    })
}

let onImageAdd = (e) => {

  if (e.target.files && e.target.files[0]) {
    replaceFromFile(e.target.files[0])
  } else {
    console.error("No file was picked")
  }
}

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <AddButton onImageAdd={onImageAdd}/>
      </header>

    </div>
  );
}

export default App;
