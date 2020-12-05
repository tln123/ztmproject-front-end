import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxArray }) => {
  return (
    <div className="center ma pt4">
      <div className='absolute mt2'>
        <img id='input-image' alt="" src={imageUrl} width="600px" height="auto" />
        {boxArray.map((box,index) => {
          return <div key={index} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
