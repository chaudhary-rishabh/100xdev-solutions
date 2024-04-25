import React, { useRef } from 'react';

function OTPLoginForm() {
  // Create refs for each input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Function to focus on the next input field
  const focusNextInput = (currentIndex) => {
    if (currentIndex < inputRefs.length - 1) {
      inputRefs[currentIndex + 1].current.focus();
    }
  };

  // Function to handle input change
  const handleChange = (e, currentIndex) => {
    const { value } = e.target;
    // You can add any validation logic here
    if (value.length === 1) {
      focusNextInput(currentIndex);
    }
  };

  return (
    <form>
      {[0, 1, 2, 3].map(index => (
        <input
          key={index}
          ref={inputRefs[index]}
          style={{ width: "20px", backgroundColor: "white", border: "2px solid white", borderRadius: "10px", padding: "10px", marginRight: '5px' }}
          type='text'
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </form>
  );
}

export default OTPLoginForm;
