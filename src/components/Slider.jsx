import React from 'react';

const Slider = () => {
  const workingcatText = "$WORKINGCAT ".repeat(50); 

  return (
    <div className="my-4 relative overflow-hidden w-screen h-16 bg-green-500 font-bold text-2xl text-white flex items-center slider-font">
      <div className="slider-content">
        {workingcatText.split(' ').map((word, index) => (
          <span key={index} className="mx-24">{word}</span>
        ))}
      </div>
      <div className="slider-content" style={{ animationDelay: '15s' }}>
        {workingcatText.split(' ').map((word, index) => (
          <span key={index} className="mx-24">{word}</span>
        ))}
      </div>
    </div>
  );
};

export default Slider;