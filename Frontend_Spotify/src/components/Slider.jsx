import React from 'react';
import './slider.css';

const Slider = ({ value, onChange }) => {
  const handleSliderChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className='w-full'>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-gray-400 w-full h-2 cursor-pointer"
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
